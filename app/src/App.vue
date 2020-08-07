<template>
  <div id="app">
    <h1>我的主页</h1>

    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
      <span> | </span>
      <router-link to="/view">Detail</router-link>
    </div>

    <hr />

    <!--满足当前url的路由组件将被显示在 router-view 的位置-->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  .router-link-exact-active {
    color: red;
  }

  #nav {
    padding: 10px 0;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,255,0,.3);
  }
</style>
