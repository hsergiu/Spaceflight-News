<template>
  <div class="news-view">
    <input v-model="searchInput" @change="onChange" class="search" type="text" placeholder="Search...">
    <div>
      <p class="loading" v-if="isLoading"></p>
      <p class="error" v-if="error">{{ error }}</p>
      <!-- item list -->
      <item
        v-for="(item, index) in items"
        :item="item"
        :index="formatItemIndex(index)"
        :key="item.id"
      >
      </item>
      <!-- navigation -->
      <div class="nav" v-show="items.length > 0">
        <router-link
          v-if="start >= pageCount"
          :to="{ name: 'events', params: { start: (start - pageCount) }, query: { ...$route.query } }"
        >
          &lt; prev
        </router-link>
        <router-link
          v-if="items.length >= pageCount"
          :to="{ name: 'events', params: { start: (start + pageCount) }, query: { ...$route.query } }"
        >
          more &gt;
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Item from './Item.vue'

import { fetchMoreEvents} from '../api/events-api'
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

export default {

  name: 'ItemView',

  components: {
    Item
  },

  setup() {
    const items = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const searchInput = ref(null)
    const page = ref(1)
    const pageCount = ref(50)
    const start = ref(0)
    const route = useRoute()
    const router = useRouter()

    const formatItemIndex = (index) => {
      return start.value + index + 1
    }

    const onChange = () => {
      isLoading.value = true
      router.push({ path: '/search', query: { search: searchInput.value } });
    }

    const fetchData = (newRoute) => {
      document.title = 'News'
      start.value = newRoute ? +newRoute?.params.start : +route.params.start
      searchInput.value = newRoute ? newRoute?.query.search : route.query.search

      return fetchMoreEvents(start.value, pageCount.value, searchInput.value)
        .then((fetchedItems) => {
          items.value = fetchedItems
        })
        .catch((err) => {
          error.value = err
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    onMounted(() => {
      fetchData()
    })

    onBeforeRouteUpdate((newRoute) => {
      fetchData(newRoute)
    })

    return {
      items,
      isLoading,
      error,
      searchInput,
      page,
      pageCount,
      start,
      formatItemIndex,
      onChange
    }
  }
}
</script>

<style scoped lang="stylus">
.search
  width 100%
  display block
  box-sizing border-box
  font-size medium
.news-view
  .loading:before
    content "Loading..."
    position absolute

  .error:before
    position absolute

  .nav
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #181a1b

    a
      margin-right 10px

      &:hover
        text-decoration underline
</style>