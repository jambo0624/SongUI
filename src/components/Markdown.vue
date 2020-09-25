<template>
  <article class="markdown-body" v-html="path"></article>
</template>

<script lang="ts">
  export default {
    name: "Markdown",
    props:{
      path: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>

