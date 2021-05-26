import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/code-bits',
      alias: '/interviews',
      name: 'CategoryPage',
      component: () => import('@/components/CategoryPage.vue')
    },
    {
      path: '/snippet/:id',
      name: 'Snippet',
      component: () => import('@/components/Snippet.vue')
    },
    {
      path: '/tiktok',
      name: 'TikTok',
      component: () => import('@/components/TikTok.vue')
    }
  ]
});