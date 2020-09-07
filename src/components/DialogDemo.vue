<template>
  <div>
    <h3>dialog 示例</h3>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible"
            :close-on-click-overlay="true"
            :ok="fn1"
            :cancel="fn2">
      <template v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum necessitatibus obcaecati omnis placeat praesentium quos? Aperiam eaque est magnam molestiae veniam? Dolores ex laborum optio quas quibusdam. Nemo, possimus.</p>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
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
