<template>
  <div class="news-view" :class="{ loading: !items.length }">
    <!-- item list -->
    <item
        v-for="item in items"
        :item="item"
        :index="$index | formatItemIndex"
        track-by=$index>
    </item>
    <!-- navigation -->
    <div class="nav" v-show="items.length > 0">
      <a v-if="start >= count" :href="'#/events/' + (start - count)">&lt; prev</a>
      <a :href="'#/events/' + (start + count)">more &gt;</a>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

import {fetchEvents, fetchMoreEvents} from '../api/events-api'

export default {

  name: 'ItemView',

  components: {
    Item
  },

  filters: {
    formatItemIndex(index) {
      return this.start + index + 1
    }
  },

  data() {
    return {
      items: {},
      page: 1,
      count: 50,
      start: 0
    }
  },

  route: {
    data({to}) {
      document.title = 'News'
      this.start = +to.params.start
      return fetchMoreEvents(to.params.start, this.count).then(items => 
        this.items = items
      )
    }
  },
}
</script>

<style scoped lang="stylus">
.news-view
  padding 0

  &.loading:before
    content "Loading..."
    position absolute
    top 16px
    left 20px

  .nav
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #333360

    a
      margin-right 10px

      &:hover
        text-decoration underline
</style>