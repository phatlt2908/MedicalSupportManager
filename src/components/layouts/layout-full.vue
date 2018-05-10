<template>
  <div>
    <top></top>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import top from '@/components/layouts/top.vue'

  export default {
    name: 'layout-full',
    components: {
      'top': top,
    },
    data() {
      return {
      }
    }
  }

</script>

<style scoped>
  .main {
    padding-top: 60px;
  }
</style>