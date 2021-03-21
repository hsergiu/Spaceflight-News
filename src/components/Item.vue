<template>
  <div class="item">
    <span class="index">{{index}}.</span>
    <p>
      <a class="title" target="_blank" :href="'#/details/' + item.id">{{item.title}}</a>
      <a class="domain" :href="href" v-show="showDomain">
        ({{item.newsSite}})
      </a>
    </p>
    <p class="subtext">
        Published: {{item.publishedAt| fromNow}}
      <span v-show="showUpdated">
        <br>
        Updated: {{item.updatedAt| fromNow}}
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
  padding 2px 0 2px 40px
  position relative
  transition background-color .2s ease
  p
    margin 2px 0
  .title:visited
      color #828282
  .index
    color #828282
    position absolute
    width 30px
    text-align right
    left 0
    top 4px
  .domain, .subtext
    font-size 11px
    color #828282
    a
      color #828282
  .subtext a:hover
    text-decoration underline
</style>
