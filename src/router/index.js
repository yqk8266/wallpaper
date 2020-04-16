import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mobile from '../views/Mobile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          affix: true
        }
      },
      {
        path: 'fengjing',
        name: 'fengjing',
        component: () => import('@/views/fengjing/fengjing'),
        meta: {
          title: '风景',
          affix: true
        }
      },
      {
        path: 'meinv',
        name: 'meinv',
        component: () => import('@/views/meinv/meinv'),
        meta: {
          title: '美女',
          affix: true
        }
      },
      {
        path: 'dongman',
        name: 'dongman',
        component: () => import('@/views/dongman/dongman'),
        meta: {
          title: '动漫',
          affix: true
        }
      },
      {
        path: 'youxi',
        name: 'youxi',
        component: () => import('@/views/youxi/youxi'),
        meta: {
          title: '游戏',
          affix: true
        }
      },
      {
        path: 'qiche',
        name: 'qiche',
        component: () => import('@/views/qiche/qiche'),
        meta: {
          title: '汽车',
          affix: true
        }
      },
      {
        path: 'meishi',
        name: 'meishi',
        component: () => import('@/views/meishi/meishi'),
        meta: {
          title: '美食',
          affix: true
        }
      },
      {
        path: 'huyan',
        name: 'huyan',
        component: () => import('@/views/huyan/huyan'),
        meta: {
          title: '护眼',
          affix: true
        }
      },
      {
        path: 'feizhuliu',
        name: 'feizhuliu',
        component: () => import('@/views/feizhuliu/feizhuliu'),
        meta: {
          title: '非主流',
          affix: true
        }
      }
    ]
  },
  {
    path: '/phone',
    component: Mobile,
    name: 'phone',
    redirect: '/phone/category',
    children: [
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/phone/phone'),
        meta: {
          title: '手机',
          affix: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
