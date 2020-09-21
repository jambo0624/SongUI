<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="song-dialog-overlay" @click="onClickOverlay"></div>
      <div class="song-dialog-wrapper">
        <div class="song-dialog">
          <header><slot name="title"></slot> <span @click="close" class="song-dialog-close"></span></header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
  import Button from './Button.vue'
  export default {
    name: "songDialog",
    components:{
      Button
    },
    props:{
      visible:{
        type: Boolean,
        default: false
      },
      closeOnClickOverlay:{
        type:Boolean,
        default: true
      },
      ok: {
        type: Function
      },
      cancel: {
        type: Function
      }
    },
    setup(props,context){
      const close = () => {
        context.emit('update:visible',false)
      }
      const onClickOverlay = () => {
        if(props.closeOnClickOverlay){
          close()
        }
      }
      const ok = () => {
        if(props.ok?.()!==false){
        // if(props.ok && props.ok()!==false){
          close()
        }
      }
      const cancel = () => {
        props.cancel?.()
        // props.cancel && props.cancel()
        close()
      }
      return { close, onClickOverlay, ok, cancel }
    }
  }
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;
  .song-dialog{
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    &-overlay {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: fade_out(#000,.5);
      z-index: 10;
    }
    &-wrapper{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 11;
    }
    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
    }
    > main {
      padding: 12px 16px;
    }
    > footer {
      padding: 12px 16px;
      border-top: 1px solid $border-color;
      text-align: right;
    }
    &-close {
      position: relative;
      display: inline-block;
      height: 16px;
      width: 16px;
      cursor: pointer;
      &::before,&::after{
        content: '';
        position: absolute;
        height: 1px;
        background: #000;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%,-50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%,-50%) rotate(45deg);
      }
    }
  }
</style>
