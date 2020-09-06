<template>
  <div>
    <h3>dialog 示例</h3>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="visible"></Dialog>
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
      return { visible, toggle }
    }
  }
</script>

<style lang="scss" scoped>

</style>
