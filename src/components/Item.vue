<template>
  <div class="item">
    <p>
      <a class="title" target="_blank" :href="'#/details/' + item.id">{{item.title}}</a>
      <a class="domain" :href="href" v-show="showDomain">
        ({{item.news_site}})
      </a>
    </p>
    <p class="subtext">
        Published: {{item.published_at| fromNow}}
      <span v-show="showUpdated">
        <br>
        Updated: {{item.updated_at| fromNow}}
      </span>
    </p>
  </div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    item: Object,
    index: Number
  },

  computed: {
    href () {
      return this.item.url
    },
    showDomain () {
      return this.item.newsSite !== ''
    },
    showUpdated () {
      return Math.abs(Date.parse(this.item.publishedAt) - Date.parse(this.item.updatedAt)) > 60 * 1000
    }
  }
}
</script>

<style scoped lang="stylus">

.item
  padding 10px 10px 10px 15px
  position relative
  transition background-color .2s ease
  border-style solid
  border-width thin
  font-size medium
  font-family Verdana
  color #333333
  p
    margin 2px 0
  .title:visited
      color #828282
  .domain, .subtext
    font-size 11px
    color #828282
    a
      color #828282
  .subtext a:hover
    text-decoration underline
</style>
