<demo>
  示例：可设置级别
</demo>
<template>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" level="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
  import { Button } from '../lib/index'
  export default {
    name: 'ButtonDemo3',
    components: {Button},
    setup(){
      const onClick = () => {
        console.log('hi')
      }
      return { onClick }
    }
  }
</script>
