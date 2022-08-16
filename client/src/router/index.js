import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue'),
  },
  {
    path: '/detail/:deviceId',
    name: 'device-detail',
    component: () => import(/* webpackChunkName: "device-detail" */ '../views/DeviceDetailPageView.vue'),
  },
  {
    path: '/cart/:userId',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
