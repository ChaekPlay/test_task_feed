<template>
  <div class="view">
    <h1>Лента постов</h1>
    <PostFeed/>
  </div>
</template>

<script  setup>
import PostFeed from './components/PostFeed.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
