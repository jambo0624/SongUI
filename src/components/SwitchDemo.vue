<template>
  <div>dialog 示例</div>
  <h3>示例 1</h3>
  <div>
    <Switch v-model:value="bool"/>
<!--    <Switch :value="y" @update:value="y = $event"/>-->
  </div>
</template>

<script lang="ts">
  import Switch from "../lib/Switch.vue"
  import { ref } from 'vue'
  export default {
    name: 'SwitchDemo',
    components: {
      Switch
    },
    setup(){
      const bool = ref(true)
      return { bool }
    }
  }
</script>

<style lang="scss" scoped>

</style>
