import { createRouter, createWebHistory } from 'vue-router';
import useUserStore from '@/stores/user';
import useCommonStore from '@/stores/common';

import middlewarePipeline from '@/router/middlewarePipeline';

import guest from '@/router/middleware/guest';
import auth from '@/router/middleware/auth';

import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/SignInView.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/detail/:deviceId',
    name: 'device-detail',
    component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetailView.vue'),
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
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { middleware } = to.meta;
  const context = {
    to,
    from,
    next,
    useUserStore,
  };

  useUserStore().check()
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      if (middleware) {
        return middleware[0]({
          ...context,
          next: middlewarePipeline(context, middleware, 1),
        });
      }

      return next();
    });
});

router.afterEach(() => {
  useCommonStore().setIsError(false);
  useCommonStore().setErrorMessages([]);
});

export default router;
