<demo>
  示例：通过显式 Dialog 组件形式使用
</demo>
<template>
  <div style="position: relative;z-index: 1;display:inline-block;">
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
  import { Button, Dialog } from '../lib/index'
  import { ref } from 'vue'
  export default {
    name: 'DialogDemo1',
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
      return {visible, toggle, fn1, fn2}
    }
  }
</script>
