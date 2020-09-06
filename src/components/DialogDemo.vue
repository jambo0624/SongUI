<template>
  <div>
    <h3>dialog 示例</h3>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :close-on-click-overlay="false" :ok="fn1" :cancel="fn2"></Dialog>
  </div>
</template>

<script lang="ts">
  import Dialog from "../lib/Dialog.vue";
  import Button from "../lib/Button.vue";
  import { ref } from 'vue'
  export default {
    name: 'DialogDemo',
    components: {
      Dialog,
      Button
    },
    setup(){
      const visible = ref(false)
      const toggle = ()=>{
        visible.value = !visible.value
      }
      const fn1= ()=>{
        return false
      }
      const fn2= ()=>{
      }
      return { visible, toggle, fn1, fn2 }
    }
  }
</script>

<style lang="scss" scoped>

</style>
