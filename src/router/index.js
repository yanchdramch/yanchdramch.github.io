import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue'),
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/ArticlePreviewView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/MusicView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/PageNotFound.vue'),
    }
  ],
})

export default router
