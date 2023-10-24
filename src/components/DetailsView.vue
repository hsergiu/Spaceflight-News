<template>
  <div class="details">
    <!-- item details -->
    {{ item.summary }}
    <br>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchEvent } from '../api/events-api'
import { useRoute } from 'vue-router';

export default {
  name: "DetailsView",

  setup() {
    const item = ref({})
    const route = useRoute()

    onMounted(async () => {
      const { id } = route.params;
      const fetchedItem = await fetchEvent(id);

      // Set the page title
      document.title = fetchedItem.title + ' | News';

      // Update the 'item' data
      item.value = fetchedItem;
    });

    return {
      item,
    };
  }
}
</script>

<style scoped lang="stylus">
.details
  color #828282
</style>