<template>
  <h1>Tabs 组件</h1>
  <Demo :component="TabsDemo1"></Demo>
</template>

<script lang="ts">
  import TabsDemo1 from '../components/Tabs1.demo.vue'
  import Demo from "./Demo.vue"
  export default {
    name: 'TabsDemo',
    components:{
      Demo
    },
    setup(){
      return { TabsDemo1 }
    }
  }
</script>
