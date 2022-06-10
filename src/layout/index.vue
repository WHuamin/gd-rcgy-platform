<template>
  <el-container class="fill-wrapper layout">
    <el-aside class="layout-aside">
      <logo :logoImgUrl="logoImgUrl" />
      <menu-aside />
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <layout-header :systemName="systemName" />
      </el-header>
      <el-main class="layout-main">
        <el-tabs
          type="card"
          v-model="currentMenuId"
          @tab-click="changeActiveTab"
        >
          <el-tab-pane
            :label="item.title"
            :name="item.id"
            v-for="(item, index) in activeMenus"
            :key="index"
          >
            <router-view />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Logo from './logo.vue'
import MenuAside from './menuAside.vue'
import LayoutHeader from './header.vue'
import RouterView from './routerView.vue'
import website from '@/constant/website.config'
import { mapGetters } from 'vuex'
export default {
  name: 'ProjectLayout',
  components: { Logo, MenuAside, LayoutHeader, RouterView },
  data () {
    return {
      logoImgUrl: 'https://redmine.zerosky.cn/themes/circle/images/logo.png',
      currentMenuId: ''
    }
  },
  computed: {
    systemName () {
      return website.companyName + website.systemName
    },
    ...mapGetters(['activeMenus', 'activeMenuId'])
  },
  created () {
    this.currentMenuId = this.activeMenuId
  },
  methods: {
    handleTabsEdit () {},
    changeActiveTab (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/layout.scss";
</style>
