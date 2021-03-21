import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'

import ItemView from './components/ItemView.vue'
import DetailsView from './components/DetailsView.vue'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/events/:start':{
    component: ItemView
  },
  '/details/:id':{
    component: DetailsView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/events/0'
})

router.start(App, '#app')
