<template>
  <div class="fill-wrapper home" style="font-size:20px;">
    <div v-for="item in 5" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
