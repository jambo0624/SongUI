<template>
  <h1>Button 组件</h1>
  <div class="demo">
    <h2>示例: 可设置表现形式</h2>
    <div class="demo-component">
      <component :is="ButtonDemo1"/>
    </div>
    <div class="demo-actions">
      <Button theme="text">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(ButtonDemo1.__sourceCode, Prism.languages.html, 'html')"></pre>
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
      <pre class="language-html" v-html="Prism.highlight(ButtonDemo2.__sourceCode, Prism.languages.html, 'html')"></pre>
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
      <pre class="language-html" v-html="Prism.highlight(ButtonDemo3.__sourceCode, Prism.languages.html, 'html')"></pre>
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
      <pre class="language-html" v-html="Prism.highlight(ButtonDemo4.__sourceCode, Prism.languages.html, 'html')"></pre>
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
      <pre class="language-html" v-html="Prism.highlight(ButtonDemo5.__sourceCode, Prism.languages.html, 'html')"></pre>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  import ButtonDemo1 from "./Button1.demo.vue"
  import ButtonDemo2 from "./Button2.demo.vue"
  import ButtonDemo3 from "./Button3.demo.vue"
  import ButtonDemo4 from "./Button4.demo.vue"
  import ButtonDemo5 from "./Button5.demo.vue"
  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup(){
      const Prism = (window as any).Prism
      return {
        ButtonDemo1,
        ButtonDemo2,
        ButtonDemo3,
        ButtonDemo4,
        ButtonDemo5,
        Prism,
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
