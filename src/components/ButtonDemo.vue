<template>
  <div>button 示例</div>
  <h3>示例 1 </h3>
  <div>
    <Button>你好</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
  <h3>示例 2 </h3>
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
  <h3>示例 3 </h3>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要按钮</Button>
    <Button theme="text">普通文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </div>
  <h3>示例 4 </h3>
  <div>
    <Button disabled>普通按钮</Button>
    <Button disabled theme="link">链接按钮</Button>
    <Button disabled theme="text">文本按钮</Button>
  </div>
  <h3>示例 5 </h3>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup(){
      const onClick = () => {
        console.log('hi')
      }
      return { onClick }
    }
  }
</script>

<style lang="scss" scoped>

</style>
