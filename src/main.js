import App from './components/App.vue'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import ItemView from './components/ItemView.vue'
import DetailsView from './components/DetailsView.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory('/Spaceflight-News/'),
  routes: [
    {
      path: '/events/:start',
      name: 'events',
      component: ItemView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/events/0'
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
});

app.use(router)

app.mount('#app')
