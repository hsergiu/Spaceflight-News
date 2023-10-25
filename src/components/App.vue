<template>
  <!-- background image -->
  <img id="main" src="/space-big.jpg" alt=""/>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <router-link :to="'/'"><img src="/spaceflight-news.png"/></router-link>
    </div>
    <!-- main view -->
    <router-view
        transition
        transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">

html, body
  font-family Verdana
  font-size 13px
  height 100%
  background-color transparent

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
  margin 0
  padding 0
  top 0
  left 0
  width 100%

#wrapper
  opacity 99.5
  position relative
  width 80%
  min-height 80px
  margin 0 auto

#header
  height auto
  img
    width 40%
    height inherit
    margin 15px 15px 15px 0

@media screen and (max-width: 700px)
  html, body
    margin 0

  #wrapper
    width 100%
</style>
