<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/movie">About</router-link> -->
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
  @import './style.scss';
</style>