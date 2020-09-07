<template>
  <div>
    <h3>dialog 示例</h3>
    <div style="position: relative;z-index: 1;">
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
    <div style="position: relative;top: 20px;margin-bottom: 40px;z-index: 2;width: 300px;height: 300px;background: lightcoral;"></div>
  </div>
  <h3>示例 2</h3>
  <Button @click="showDialog">Show Dialog</Button>
</template>

<script lang="ts">
  import Dialog from "../lib/Dialog.vue";
  import Button from "../lib/Button.vue";
  import { ref } from 'vue'
  import { openDialog } from "../lib/openDialog";
  export default {
    name: 'DialogDemo',
    components: {
      Dialog,
      Button
    },
    setup: function () {
      const visible = ref(false)
      const toggle = () => {
        visible.value = !visible.value
      }
      const fn1 = () => {
        return false
      }
      const fn2 = () => {
      }
      const showDialog = () => {
        openDialog({
          title: '标题',
          content: '内容',
          ok:()=>{
            console.log('ok')
          },
          cancel: ()=>{
            console.log('cancel')
          },
          closeOnClickOverlay: false
        })
      }
      return {visible, toggle, fn1, fn2, showDialog}
    }
  }
</script>

<style lang="scss" scoped>

</style>
