<template>
  <h1>Dialog 组件</h1>
  <div class="demo">
    <h2>示例: 通过显式 Dialog 组件形式使用</h2>
    <div class="demo-component">
      <component :is="DialogDemo1"/><span>弹窗 OK 按钮回调返回 false，所以点击后不关闭窗体</span>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{DialogDemo1.__sourceCode}}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>示例: 通过传参调用 openDialog 事件形式使用</h2>
    <div class="demo-component">
      <component :is="DialogDemo2"/><span>closeOnClickOverlay 为 false，所以点击窗体外遮罩部分，窗体不关闭</span>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{DialogDemo2.__sourceCode}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";
  import DialogDemo1 from './Dialog1.demo.vue';
  import DialogDemo2 from './Dialog2.demo.vue';
  export default {
    name: 'DialogDemo',
    components: {
      Button
    },
    setup: function () {
      return {
        DialogDemo1,
        DialogDemo2
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo{
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    span {
      padding: 8px 16px;
      font-size: 14px;
      vertical-align: middle;
      color: #aaa;
    }
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
