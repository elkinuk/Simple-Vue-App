<template>
  <div>
    <svg class="svg" viewBox="0 0 960 300">
      <symbol id="s-text">
        <text class="text" textAnchor="middle" x="50%" y="80%">
          <slot name="content"></slot>
        </text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy" />
        <use xlink:href="#s-text" class="text-copy" />
        <use xlink:href="#s-text" class="text-copy" />
        <use xlink:href="#s-text" class="text-copy" />
        <use xlink:href="#s-text" class="text-copy" />
      </g>
    </svg>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import './style.scss';
</style>
