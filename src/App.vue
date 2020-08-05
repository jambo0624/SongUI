<template>
  <div>Hi Vue3! |
    <router-link to="/">第一个组件</router-link> |
    <router-link to="/xxx">ts-config</router-link>
  </div>
  <br>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
