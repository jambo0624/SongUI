<template>
  <button class="song-switch"
          :disabled="disabled"
          :class="{ 'song-checked': value }"
          @click="toggle"> <span></span> </button>
</template>

<script lang="ts">
  export default {
    name: 'songSwitch',
    props: {
      value: Boolean,
      disabled: Boolean
    },
    setup(props, context){
      const toggle = () => {
        if(!props.disabled){
          context.emit('update:value',!props.value)
        }
      }
      return { toggle }
    }
  }
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .song-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: #fff;
      border-radius: $h2/2;
      transition: all .25s;
    }
    &.song-checked{
      background: #1890ff;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:focus{
      outline: none;
    }
    &:active{
      > span {width: $h2 + 4px;}
    }
    &.song-checked:active{
      > span{
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>
