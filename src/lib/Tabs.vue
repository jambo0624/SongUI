<template>
  <div class="song-tabs">
    <div class="song-tabs-nav">
      <div class="song-tabs-nav-item"
           :class="{ selected: title === this.selected}"
           v-for="(title, index) in titles"
           :key="index">{{title}}</div>
    </div>
    <div class="song-tabs-content">
      <component class="song-tabs-content-item"
                 v-for="(component, index) in defaults"
                 :key="index"
                 :is="component" />
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue'
  export default {
    name: "songTabs",
    props: {
      selected: {
        type: String
      }
    },
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

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .song-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

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

    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
