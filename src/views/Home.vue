<template>
  <div>
    <topnav></topnav>
    <div class="banner">
      <h1>Song UI</h1>
      <h2>基于 Vue3 的 UI 框架，开发时使用了 Vite，这个针对 Vue 单页面组件的无打包开发服务器。</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <router-link to="/doc">Get Start</router-link>
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
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $height: 28px;
        height: $height;
        line-height: $height;
        border-radius: $height/2;
        padding: 0 8px;
      }
    }
  }
</style>
