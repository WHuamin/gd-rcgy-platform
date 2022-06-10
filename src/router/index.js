import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'
import RouterView from '../layout/routerView.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'RcgyLogin',
        meta: {
          name: '登录',
          needDynamic: false, // 是否是动态加载子路由
          keepAlive: false // 是否缓存
        },
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'home',
        name: 'home',
        meta: {
          name: '登录',
          needDynamic: false, // 是否是动态加载子路由
          keepAlive: false // 是否缓存
        },
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'house',
        name: 'house',
        meta: {
          name: '房源管理',
          needDynamic: false, // 是否是动态加载子路由
          keepAlive: false // 是否缓存
        },
        component: RouterView,
        children: [
          {
            path: 'type',
            name: 'houseType',
            meta: {
              name: '户型',
              needDynamic: false, // 是否是动态加载子路由
              keepAlive: false // 是否缓存
            },
            component: () => import('../views/HouseType.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
