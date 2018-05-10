import Vue from 'vue'
import Router from 'vue-router'

import layoutFull from '@/components/layouts/layout-full.vue'
import layoutDefault from '@/components/layouts/layout-default.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '',
      component: layoutFull,
      children: [
        {
          path: '/page-not-found',
          component: () => import('@/components/errors/404.vue'),
          name: '404',
          meta: {
            title: 'Page not found'
          }
        },
        {
          path: '/home',
          component: () => import('@/components/home/index.vue'),
          name: 'home',
          meta: {
            title: 'Home',
            active: 'home'
          }
        },
        {
          path: '/listMedical',
          component: () => import('@/components/listMedical/list.vue'),
          name: 'home',
          meta: {
            title: 'Home',
            active: 'home'
          }
        }
      ]
    },
    {
      path: '/',
      component: layoutDefault,
      children: [
        {
          path: 'login/:email?',
          component: () => import('@/components/authentications/login.vue'),
          name: 'login',
          meta: {
            title: 'Login'
          }
        },
        // {
        //   path: 'forgot',
        //   component: () => import('@/components/authentications/forgot.vue'),
        //   name: 'forgot',
        //   meta: {
        //     title: 'forgot password'
        //   }
        // },
        // {
        //   path: 'reset/:email/:currentPassword',
        //   component: () => import('@/components/authentications/reset.vue'),
        //   name: 'reset',
        //   meta: {
        //     title: 'reset password'
        //   }
        // }
      ]
    },
    {
      path: '*',
      redirect: '/page-not-found'
    }
  ]
})
