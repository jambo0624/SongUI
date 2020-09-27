<template>
  <div class="song-tabs">
    <div class="song-tabs-nav" ref="container">
      <div class="song-tabs-nav-item"
           @click="select(title)"
           :class="{ selected: title === selected}"
           v-for="(title, index) in titles"
           :ref = "el => { if(title === selected) selectedItem = el}"
           :key="index">{{title}}</div>
      <div ref="indicator" class="song-tabs-nav-indicator"></div>
    </div>
    <div class="song-tabs-content">
      <component class="song-tabs-content-item"
                 :is="current"
                 :key="$props.selected" />
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue'
  import { computed, ref, onMounted, watchEffect } from 'vue';
  export default {
    name: "songTabs",
    props: {
      selected: {
        type: String
      }
    },
    setup(props,context) {
      const selectedItem = ref < HTMLDivElement > (null)
      const indicator = ref < HTMLDivElement > (null)
      const container = ref < HTMLDivElement > (null)
      onMounted(()=>{
        watchEffect(()=>{
          const { width, left } = selectedItem.value.getBoundingClientRect()
          const { left: parentLeft } = container.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          indicator.value.style.left = (left - parentLeft) + 'px'
        }, { flush: 'post'})
      })
      const defaults = context.slots.default()
      defaults.forEach(tag => {
        if(tag.type !== Tab){
          throw new Error('Tabs 组件的子组件必须是 Tab 组件')
        }
      })
      const titles = defaults.map(tag => {
        return tag.props.title
      })
      const current = computed(()=>{
        return defaults.find(tag => {
          return tag.props.title === props.selected
        })
      })
      const select = (title :String )=>{
        context.emit('update:selected',title)
      }
      return {
        defaults,
        titles,
        current,
        select,
        selectedItem,
        indicator,
        container
      }
    }
  }
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .song-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 2px;
        background: $blue;
        left: 0;
        bottom: -1px;
        transition: all 250ms;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
