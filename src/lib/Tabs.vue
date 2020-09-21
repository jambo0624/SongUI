<template>
  <div>
    Tabs组件
    <div v-for="(title, index) in titles" :key="index">{{title}}</div>
    <component v-for="(component, index) in defaults" :key="index"
               :is="component" />
  </div>
</template>

<script lang="ts">
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
      const titles = defaults.map(tag => {
        return tag.props.title
      })
      return { defaults, titles }
    }
  }
</script>

<style scoped>

</style>
