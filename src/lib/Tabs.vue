<template>
  <div class="song-tabs">
    <div class="song-tabs-nav">
      <div class="song-tabs-nav-item"
           @click="select(title)"
           :class="{ selected: title === this.selected}"
           v-for="(title, index) in titles"
           :ref = "el => { if(el) navItems[index] = el}"
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
  import { computed, ref, onMounted } from 'vue';
  export default {
    name: "songTabs",
    props: {
      selected: {
        type: String
      }
    },
    setup(props,context) {
      const navItems = ref < HTMLDivElement[] > ([])
      const indicator = ref < HTMLDivElement > (null)
      onMounted(()=>{
        const divs = navItems.value
        const result = divs.filter(div => {
          return div.classList.contains('selected')
        })[0]
        const { width } = result.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
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
      return { defaults, titles, current, select, navItems, indicator }
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
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
