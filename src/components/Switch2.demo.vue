<demo>
  示例：支持 disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled/>
</template>

<script lang="ts">
  import { Switch } from '../lib/index'
  import { ref } from 'vue'
  export default {
    name: 'SwitchDemo2',
    components: {
      Switch
    },
    setup(){
      const bool = ref(false)
      return { bool }
    }
  }
</script>
