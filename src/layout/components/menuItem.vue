<template>
  <div>
    <template v-if="menu.children && menu.children.length">
      <el-sub-menu :index="menuIndex">
        <template #title>
          <span>{{ menu.title }}</span>
        </template>
        <template v-for="(subItem,index) in menu.children" :key="subItem.id">
          <menu-item :menu="subItem" :menuIndex="menuIndex+'_'+index" />
        </template>
      </el-sub-menu>
    </template>
    <el-menu-item v-else :index="menuIndex">{{ menu.title }}</el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'LayoutMenuItem',
  props: {
    menu: {
      type: Object,
      default: () => ({})
    },
    menuIndex: {
      type: String,
      default: ''
    }
  }
}
</script>
