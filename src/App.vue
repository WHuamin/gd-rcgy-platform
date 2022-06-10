<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('system', ['clearActiveMenu'])
  },
  unmounted () {
    this.clearActiveMenu()
  }
}
</script>
<style lang="scss">
@import url(./../src/assets/css/index.scss);
</style>
