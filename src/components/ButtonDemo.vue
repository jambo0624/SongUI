<template>
  <h1>button 组件</h1>
  <div class="demo">
    <h2>示例: 可设置表现形式</h2>
    <div class="demo-component">
      <component :is="ButtonDemo1"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{ButtonDemo1.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>示例: 可设置大小</h2>
    <div class="demo-component">
      <component :is="ButtonDemo2"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{ButtonDemo2.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>示例: 可设置级别</h2>
    <div class="demo-component">
      <component :is="ButtonDemo3"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{ButtonDemo3.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>示例: 可设置 disabled</h2>
    <div class="demo-component">
      <component :is="ButtonDemo4"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{ButtonDemo4.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>示例: 可设置 loading</h2>
    <div class="demo-component">
      <component :is="ButtonDemo5"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{ButtonDemo5.__sourceCode}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  import ButtonDemo1 from "./ButtonDemo1.vue"
  import ButtonDemo2 from "./ButtonDemo2.vue"
  import ButtonDemo3 from "./ButtonDemo3.vue"
  import ButtonDemo4 from "./ButtonDemo4.vue"
  import ButtonDemo5 from "./ButtonDemo5.vue"
  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup(){
      return {
        ButtonDemo1,
        ButtonDemo2,
        ButtonDemo3,
        ButtonDemo4,
        ButtonDemo5,
      }
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
