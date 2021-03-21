<template>
  <div>
  <img id="main" src="https://i.ibb.co/fXd5TDH/long.jpg" alt=""/>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <img id="yc" src="https://i.ibb.co/pWhvXq4/shuttle.png">
      <h1><a href="#/events">Spaceflight News</a></h1>
    </div>
    <!-- main view -->
    <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
    </router-view>
  </div>
  </div>
</template>

<style lang="stylus">

html, body
  font-family Verdana
  font-size 13px
  height 100%

ul
  list-style-type none
  padding 0
  margin 0

a
  color #fff
  cursor pointer
  text-decoration none

#main
  position fixed
  background-color #000
  color #000
  margin 0
  padding 0
  top 0
  left 0
  width 100%
  height 100%

#wrapper
  opacity 95%
  background-color #000
  position relative
  width 80%
  min-height 80px
  margin 0 auto

#header
  background-color #333366
  height 24px
  position relative

  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0

  .source
    color #fff
    font-size 11px
    position absolute
    top 4px
    right 4px

    a
      color #fff

      &:hover
        text-decoration underline

#yc
  border 1px solid #fff
  margin 2px
  display inline-block
  vertical-align middle

  img
    vertical-align middle

.view
  position absolute
  background-color #000
  width 100%
  transition opacity .2s ease
  box-sizing border-box
  padding 8px 20px

  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0

  #wrapper
    width 100%
</style>
