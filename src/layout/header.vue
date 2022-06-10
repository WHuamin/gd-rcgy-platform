<template>
  <div class="flex-row-between layout-header-wrapper">
    <div class="flex-shrink left-nav"><i :class="menubarStatusIcon"></i></div>
    <div class="flex-grow">
      <h3 class="system-title">{{ systemName }}</h3>
    </div>
    <div class="right-nav">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <el-avatar shape="square" size="medium" :src="userImg"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="clearActiveMenu()">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'LayoutHeader',
  props: {
    systemName: {
      type: String,
      default: '系统管理'
    },
    menubarStatus: {
      type: String,
      default: 'grow' // grow：展开 shrink：缩起
    }
  },
  data () {
    return {
      userImg:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  computed: {
    menubarStatusIcon () {
      return this.menubarStatus === 'shrink'
        ? 'el-icon-s-unfold'
        : 'el-icon-s-fold'
    }
  },
  methods: {
    ...mapActions('system', ['clearActiveMenu'])
  }
}
</script>

<style lang="scss" scoped>
.layout-header-wrapper {
  width: 100%;
  height: $layout-header-height;
  padding: $layout-spacing;
}
.system-title {
  font-size: 24px;
  color: $color-black;
}
</style>
