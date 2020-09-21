<template>
  <div>
    Tabs组件
  </div>
</template>

<script>
  import Tab from './Tab.vue'
  export default {
    name: "songTabs",
    setup(props,context) {
      const defaults = context.slots.default()
      defaults.forEach(tag => {
        if(tag.type !== Tab){
          throw new Error('Tabs 组件的子组件必须是 Tab 组件')
        }
      })
      return { defaults }
    }
  }
</script>

<style scoped>

</style>
