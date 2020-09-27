<demo>
  示例：可设置表现形式
</demo>
<template>
  <Button>普通按钮</Button>
  <Button theme="button">默认按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
  import { Button } from '../lib/index'
  export default {
    name: 'ButtonDemo1',
    components: {Button},
    setup(){
      const onClick = () => {
        console.log('hi')
      }
      return { onClick }
    }
  }
</script>
