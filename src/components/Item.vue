<template>
  <div class="item">
    <p>
      <a class="title" target="_blank" :href="'/details/' + item.id">{{item.title}}</a>
      <a class="domain" :href="href" v-show="showDomain">
        ({{ item.news_site }})
      </a>
    </p>
    <p class="subtext">
        Published: {{ publishedAt }}
      <span v-show="showUpdated">
        <br>
        Updated: {{ updatedAt }}
      </span>
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { fromNow } from '../filters'

export default {

  name: 'Item',

  props: {
    item: Object,
    index: Number
  },

  setup(props) {
    const href = computed(() => props.item.url);
    const showDomain = computed(() => props.item.newsSite !== '');
    const showUpdated = computed(() =>
      Math.abs(
        Date.parse(props.item.publishedAt) - Date.parse(props.item.updatedAt)
      ) > 60 * 1000
    );
    const updatedAt = computed(() => fromNow(props.item.updated_at))
    const publishedAt = computed(() => fromNow(props.item.published_at))

    return {
      href,
      showDomain,
      showUpdated,
      updatedAt,
      publishedAt
    };
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
  background-color #181a1b
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
