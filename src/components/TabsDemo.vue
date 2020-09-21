<template>
  <div>
    <h3>tabs 示例 1</h3>
    <Tabs v-model:selected="x">
      <Tab title="导航 1">内容 1</Tab>
      <Tab title="导航 2">内容 2</Tab>
    </Tabs>
    <h3>tabs 示例 2</h3>
  </div>
</template>

<script lang="ts">
  import Tab from "../lib/Tab.vue";
  import Tabs from "../lib/Tabs.vue";
  import { ref } from 'vue';
  export default {
    name: 'TabsDemo',
    components: {
      Tab,
      Tabs
    },
    setup(){
      const x = ref('导航 1')
      return { x }
    }
  }
</script>

<style lang="scss" scoped>

</style>
