import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderList from './views/OrderList'
import apiRequest from "/utils/apiRequest";
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'orders',
    component: OrderList,
    meta: {
      title: 'orders',
      layout: 'main',
      requiredAuth: true,
    }
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('./views/OrserStatisticList'),
    meta: {
      title: 'statistic',
      layout: 'main',
      requiredAuth: true,
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('./views/OrderDetail'),
    meta: {
      title: 'statistic',
      layout: 'empty',
      requiredAuth: true,
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('./views/UserInfo'),
    meta: {
      title: 'user',
      layout: 'main',
      requiredAuth: true,
    }
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('./views/OrderHistoryList'),
    meta: {
      title: 'history',
      layout: 'main',
      requiredAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login'),
    meta: {
      title: 'Login',
      layout: 'empty',
      requiredAuth: false,
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('./views/Registration'),
    meta: {
      title: 'registration',
      layout: 'empty',
      requiredAuth: false,
    }
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('./views/ResetPassword'),
    meta: {
      title: 'Reset Password',
      layout: 'empty',
      requiredAuth: false,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
    store.dispatch('auth/refresh')
        .then(() => {
          const isAuthorized = store.getters['auth/isAuthorized'];
          if (to.meta.requiredAuth && !isAuthorized) {
            next({name: 'login'});
          } else {
            document.title = `${to.meta.title}`;
            next();
          }
        })
        .catch(() => {
          if (to.meta.requiredAuth) {
            next({name: 'login'});
          } else {
            document.title = `${to.meta.title}`;
            next()
          }
        });
    apiRequest.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status) {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          router.replace({
            name: 'login'

          })
        }
        return Promise.reject(error.response.data);
      }
    });


});

export default router
