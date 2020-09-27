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
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="text" size="big">大按钮</Button>
    <Button theme="text">按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>
</template>

<script lang="ts">
  import { Button } from '../lib/index'
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
