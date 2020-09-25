<demo>
  可设置 disabled
</demo>
<template>
  <Button disabled>普通按钮</Button>
  <Button disabled theme="link">链接按钮</Button>
  <Button disabled theme="text">文本按钮</Button>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  export default {
    name: 'ButtonDemo4',
    components: {Button},
    setup(){
      const onClick = () => {
        console.log('hi')
      }
      return { onClick }
    }
  }
</script>
