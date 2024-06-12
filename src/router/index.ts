import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const locale = window.location.pathname.replace(/^\/([^/]+).*/, '$1')
const baseLocale = locale.trim().length && locale != '/' ? '/' + locale : '/'

const router = createRouter({
  history: createWebHistory(baseLocale),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
