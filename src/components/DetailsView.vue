<template>
  <div class="details">
    <!-- item details -->
    {{item.summary}}
    <br>
  </div>
</template>

<script>
import {fetchEvent} from '../api/events-api'

export default {
  name: "DetailsView",

  data () {
    return {
      item: {}
    }
  },

  route: {
    data ({ to }) {
      return fetchEvent(to.params.id).then(item => {
        document.title = item.title + ' | News'
        return {
          item
        }
      })
    }
  },

}
</script>

<style scoped lang="stylus">
.details
  color #828282
</style>