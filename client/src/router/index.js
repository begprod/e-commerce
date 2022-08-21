import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import middlewarePipeline from './middlewarePipeline';

import guest from './middleware/guest';
import auth from './middleware/auth';

import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/detail/:deviceId',
    name: 'device-detail',
    component: () => import(/* webpackChunkName: "device-detail" */ '../views/DeviceDetailPageView.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/cart/:userId',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue'),
    meta: {
      middleware: [
        auth,
      ],
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
    meta: {
      middleware: [
        auth,
      ],
    },
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

router.beforeEach((to, from, next) => {
  const { middleware } = to.meta;

  if (middleware === undefined) {
    next();
  }

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
