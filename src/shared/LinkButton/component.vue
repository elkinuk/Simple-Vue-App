<template>
  <router-link :to="this.to">
    <span class="link">
      <slot name="content"></slot>
    </span>
  </router-link>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
