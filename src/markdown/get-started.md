
# 开始使用
请先确保[安装](#/doc/install)了本组件库

然后引入要使用的组件

```js
import { Button, Dialog, Tab, Tabs, Switch, openDialog } from 'song-ui' 
```

下面是代码示例:
```vue
<template>
  <div>
  <Button>按钮</Button>
</div>
</template>
<script >
  import { Button } from 'song-ui' 
  export default {
    components: { Button }
  }
</script>
```

本文档，所有组件示例源代码在实际应用中引入路径均应为 'song-ui'

下一节: [Button 组件](#/doc/button)
