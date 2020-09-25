<demo>
  示例：通过传参调用 openDialog 事件形式使用
</demo>
<template>
  <Button @click="showDialog">Show Dialog</Button>
</template>

<script lang="ts">
  import Dialog from "../lib/Dialog.vue";
  import Button from "../lib/Button.vue";
  import { openDialog } from "../lib/openDialog";
  export default {
    name: 'DialogDemo2',
    components: {
      Dialog,
      Button
    },
    setup: function () {
      const showDialog = () => {
        openDialog({
          title: '标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum necessitatibus obcaecati omnis placeat praesentium quos? Aperiam eaque est magnam molestiae veniam? Dolores ex laborum optio quas quibusdam. Nemo, possimus.',
          ok:()=>{
            console.log('ok')
          },
          cancel: ()=>{
            console.log('cancel')
          },
          closeOnClickOverlay: false
        })
      }
      return { showDialog }
    }
  }
</script>
