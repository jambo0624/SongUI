<template>
  <div class="topnav">
    <svg class="icon icon-menu" aria-hidden="true" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li><router-link to="/">菜单一</router-link></li>
      <li>菜单二</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { inject, Ref } from 'vue'
  export default {
    setup(){
      const asideVisible = inject<Ref<boolean>>('asideVisible')
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value
      }
      return { toggleAside }
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: #000;
    overflow: hidden;
  }
  .topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    background: pink;
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
    > .icon-menu {
      display: none;
    }
    @media (max-width: 500px){
      > .logo {
        margin: 0 auto;
      }
      > .menu {
        display: none;
      }
      > .icon-menu {
        display: block;
      }
    }
  }
</style>
