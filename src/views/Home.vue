<template>
  <div>
    <topnav></topnav>
    <div class="banner">
      <h1>Song UI</h1>
      <h2>基于 Vue3 的 UI 框架，开发时使用了 Vite，这个针对 Vue 单页面组件的无打包开发服务器。</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <a href="#">Get Start</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'
  export default {
    components: {
      Topnav
    }
  }
</script>

<style lang="scss" scoped>
  .topnav {
    display: flex;
    padding: 16px;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
  }
</style>
