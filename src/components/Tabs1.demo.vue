<demo>
  常规用法
</demo>
<template>
  <Tabs v-model:selected="selectedTab">
    <Tab title="导航 1">内容 1</Tab>
    <Tab title="导航 2">内容 2</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from "../lib/Tabs.vue"
  import Tab from "../lib/Tab.vue"
  import { ref } from 'vue'
  export default {
    name: 'TabsDemo1',
    components: {
      Tabs,
      Tab
    },
    setup(){
      const selectedTab = ref('导航 1')
      return { selectedTab }
    }
  }
</script>
