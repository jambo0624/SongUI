<template>
  <h1>Button 组件</h1>
  <Demo :component="ButtonDemo1"></Demo>
  <Demo :component="ButtonDemo2"></Demo>
  <Demo :component="ButtonDemo3"></Demo>
  <Demo :component="ButtonDemo4"></Demo>
  <Demo :component="ButtonDemo5"></Demo>
</template>

<script lang="ts">
  import ButtonDemo1 from "./Button1.demo.vue"
  import ButtonDemo2 from "./Button2.demo.vue"
  import ButtonDemo3 from "./Button3.demo.vue"
  import ButtonDemo4 from "./Button4.demo.vue"
  import ButtonDemo5 from "./Button5.demo.vue"
  import Demo from "./Demo.vue"
  export default {
    name: 'ButtonDemo',
    components: { Demo },
    setup(){
      return {
        ButtonDemo1,
        ButtonDemo2,
        ButtonDemo3,
        ButtonDemo4,
        ButtonDemo5,
      }
    }
  }
</script>
