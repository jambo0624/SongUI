<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
  import md from '../markdown/get-start.md'
  export default {
    name: "GetStarted",
    setup(){
      return { md }
    }
  }
</script>

<style scoped>

</style>
