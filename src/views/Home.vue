<template>
  <div>
    <Topnav/>
    <div class="banner">
      <p class="h1">Song UI</p>
      <p class="description">基于 Vue3 的 UI 框架, 开发时使用了 Vite</p>
      <p class="actions">
        <a href="https://github.com/jambo0624/ViteUI">GitHub</a>
        <router-link to="/doc">Get Start</router-link>
      </p>
    </div>
    <div class="features">
      <div class="feature">
        <div class="feature-icon">
          <svg class="icon icon-vue" aria-hidden="true" @click="toggleAside">
            <use xlink:href="#icon-vue"></use>
          </svg>
        </div>
        <div class="feature-content">
          <h2>基于 Vue 3 </h2>
          <p>使用了 Composition API </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <svg class="icon icon-ts" aria-hidden="true" @click="toggleAside">
            <use xlink:href="#icon-ts"></use>
          </svg>
        </div>
        <div class="feature-content">
          <h2>基于 TypeScript </h2>
          <p>采用 TypeScript 书写</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <svg class="icon icon-easy" aria-hidden="true" @click="toggleAside">
            <use xlink:href="#icon-easy"></use>
          </svg>
        </div>
        <div class="feature-content">
          <h2>代码易读</h2>
          <p>组件的源代码极其简洁</p>
        </div>
      </div>
    </div>
    <div class="footer">
      MIT Licensed | Copyright © 2020-present Jambo Song
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'
  export default {
    components: {
      Topnav
    }
  }
</script>

<style lang="scss" scoped>
  $border-radius: 4px;
  .banner {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .h1 {
      font-size: 3rem;
      margin: 1.8rem auto;
    }
    .description {
      font-size: 1.6rem;
      max-width: 10rem;
      line-height: 1.3;
      margin: 1.8rem auto;
    }
    > .actions {
      padding: 8px 0;
      a {
        color: #fff;
        display: inline-block;
        font-size: 1.2rem;
        background-color: #3eaf7c;
        border-bottom: 1px solid #389d70;
        padding: .8rem 1.6rem;
        border-radius: $border-radius;
        margin: 0 10px;
      }
    }
  }
  .features {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 250px;
    margin: 50px auto 0;
    padding: 40px 0;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    .feature {
      display: flex;
      margin-top: 10px;
      &-icon {
        svg{
          width: 64px;
          height: 64px;
        }
      }
      &-content {
        margin-left: 10px;
        p{
          margin-top: 5px;
        }
      }
    }
  }
  .footer {
    padding: 2.5rem;
    text-align: center;
  }
  @media (min-width: 800px) {
    .banner .description{
      max-width: 35rem;
    }
    .features {
      max-width: 800px;
    }
  }
  @media (min-width: 1200px) {
    .banner .description{
      max-width: 35rem;
    }
    .features {
      max-width: 960px;
    }
  }
</style>
