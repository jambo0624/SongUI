<template>
  <h1>Dialog 组件</h1>
  <Demo :component="DialogDemo1"></Demo>
  <Demo :component="DialogDemo2"></Demo>
</template>

<script lang="ts">
  import DialogDemo1 from './Dialog1.demo.vue';
  import DialogDemo2 from './Dialog2.demo.vue';
  import Demo from "./Demo.vue";
  export default {
    name: 'DialogDemo',
    components: {
      Demo
    },
    setup: function () {
      return {
        DialogDemo1,
        DialogDemo2,
      }
    }
  }
</script>
