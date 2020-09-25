<template>
  <h1>Switch 组件</h1>
  <Demo :component="SwitchDemo1"></Demo>
  <Demo :component="SwitchDemo2"></Demo>
</template>

<script lang="ts">
  import SwitchDemo1 from "./Switch1.demo.vue"
  import SwitchDemo2 from "./Switch2.demo.vue"
  import Demo from "./Demo.vue"
  export default {
    name: 'SwitchDemo',
    components: {
      Demo
    },
    setup(){
      return { SwitchDemo1, SwitchDemo2 }
    }
  }
</script>
