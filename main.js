import App from './src/components/App.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import ItemView from './src/components/ItemView.vue'
import DetailsView from './src/components/DetailsView.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
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
      path: '/:pathMatch(.*)*',
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
