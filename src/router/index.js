import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UrlShortener from '@/views/UrlShortener.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shorten',
      name: 'url-shortener',
      component: UrlShortener,
    },
  ],
})

export default router
