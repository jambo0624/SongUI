<demo>
  示例：可设置大小
</demo>
<template>
  <div>
    <Button size="big">大按钮</Button>
    <Button>按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大链接按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="link" size="small">小链接按钮</Button>
  </div>
  <div>
    <Button theme="text" size="big">大文本按钮</Button>
    <Button theme="text">文本按钮</Button>
    <Button theme="text" size="small">小文本按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  export default {
    name: 'ButtonDemo2',
    components: {Button},
    setup(){
      const onClick = () => {
        console.log('hi')
      }
      return { onClick }
    }
  }
</script>
