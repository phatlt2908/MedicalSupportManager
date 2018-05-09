<template>
  <div>
    <top></top>
    <main class="main">
      <side></side>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import top from '@/components/layouts/top.vue'
  import side from '@/components/layouts/side.vue'

  export default {
    name: 'layout-full',
    components: {
      'top': top,
      'side': side
    },
    data() {
      return {
      }
    }
  }

</script>

<style scoped>

</style>