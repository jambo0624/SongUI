<template>
  <div>
    <h3>tabs 示例 1</h3>
    <Tabs>
      <Tab title="导航 1">内容 1</Tab>
      <Tab title="导航 2">内容 2</Tab>
    </Tabs>
    <h3>tabs 示例 2</h3>
  </div>
</template>

<script lang="ts">
  import Tab from "../lib/Tab.vue";
  import Tabs from "../lib/Tabs.vue";
  export default {
    name: 'TabsDemo',
    components: {
      Tab,
      Tabs
    }
  }
</script>

<style lang="scss" scoped>

</style>
