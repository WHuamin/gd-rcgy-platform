<template>
  <div class="layout-menu">
    <el-menu
      :default-active="activeMenu"
      background-color="transparents"
      text-color="#fff"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <template v-for="(item, index) in menus" :key="item.id">
        <menu-item :menu="item" :menuIndex="index+''" />
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuItem from './components/menuItem.vue'
export default {
  name: 'LayoutMenuAside',
  components: { MenuItem },
  props: {
    logoImgUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeMenu: '2-1',
      menus: [
        {
          title: '首页',
          id: '1',
          routerPath: '/home'
        },
        {
          title: '房源管理',
          id: '2',
          routerPath: '/housing',
          children: [
            {
              title: '户型管理',
              id: '21',
              routerPath: '/home'
            },
            {
              title: '户型管理2',
              id: '22',
              routerPath: '/house/type'
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions('system', ['setActiveMenu']),
    handleSelect (key, keyPath) {
      const thePath = keyPath[keyPath.length - 1].split('_')
      const len = thePath.length
      let theMenuInfo = {}
      let cuttentMenu = this.menus
      for (let i = 0; i < len; i++) {
        const index = thePath[i]
        if (i + 1 >= len) {
          theMenuInfo = { ...cuttentMenu[index] }
        } else {
          cuttentMenu = cuttentMenu[thePath[i]].children
        }
      }
      this.setActiveMenu(theMenuInfo).then(() => {
        this.$router.push({ path: theMenuInfo.routerPath }).catch(() => {})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-menu {
  width: 100%;
  height: calc(100% - $layout-header-height);
}
</style>
