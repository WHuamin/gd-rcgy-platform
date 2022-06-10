import { localCache } from '@/utils/cache.js'
const websiteConfig = require('@/constant/website.config.js')

export default {
  namespaced: true,
  state: {
    website: websiteConfig,
    // navLogo: require('@/assets/images/logo-layout.png'),
    fileUrl: process.env.VUE_APP_BASE_URL + '/gyzf-file-server/',
    activeMenus: localCache.get('activeMenus') || [],
    activeMenuId: localCache.get('activeMenuId') || ''
  },
  mutations: {
    // 设置当前用户所有打开系统的活动页面
    SET_ACTIVEMENUS: (state, data) => {
      if (data) {
        const resetMenuIndex = state.activeMenus.findIndex(
          (item) => item.id === data.id
        )
        if (resetMenuIndex > -1) {
          state.activeMenus.splice(resetMenuIndex, 1, data)
        } else {
          state.activeMenus.push(data)
        }
      } else {
        state.activeMenus = []
      }
      localCache.set('activeMenus', state.activeMenus)
    },
    // 设置当前用户活动的页面id
    SET_ACTIVEMEMUID: (state, data) => {
      state.activeMenuId = data
      localCache.set('activeMenuId', data)
    }
  },
  actions: {
    setActiveMenu ({ commit, dispatch }, data) {
      return new Promise((resolve) => {
        commit('SET_ACTIVEMENUS', data)
        commit('SET_ACTIVEMEMUID', data.id)
        resolve()
      })
    },
    clearActiveMenu ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_ACTIVEMENUS', undefined)
        commit('SET_ACTIVEMEMUID', '')
        resolve()
      })
    }
  }
}
