<template>
  <h1>Tabs 组件</h1>
  <div class="demo">
    <h2>示例: 常规用法</h2>
    <div class="demo-component">
      <component :is="TabsDemo1"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{TabsDemo1.__sourceCode}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue"
  import TabsDemo1 from '../components/Tabs1.demo.vue'
  export default {
    name: 'TabsDemo',
    components:{
      Button
    },
    setup(){
      return { TabsDemo1 }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo{
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 16px;
    }

    &-actions {
      padding: 8px 16px;
      border: 1px dashed $border-color;
    }
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>
