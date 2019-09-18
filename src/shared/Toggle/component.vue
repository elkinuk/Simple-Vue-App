<template>
  <div class="toggle">
    <span class="toggle__label"> {{ text }} </span>
    <div class="toggle__body">
      <input
        v-model="currrentValue"
        :id="'toggle-' + labels[0]"
        class="toggle__item--left"
        :name="name"
        type="radio"
        :value="labels[0]"
        @change="toggleData"
      />
      <label :for="'toggle-' + labels[0]" class="btn">
        {{ labels[0] }}
      </label>
      <input
        v-model="currrentValue"
        :id="'toggle-' + labels[1]"
        class="toggle__item--right"
        :name="name"
        :value="labels[1]"
        type="radio"
        @change="toggleData"
      />
      <label :for="'toggle-' + labels[1]" class="btn">
        {{ labels[1] }}
      </label>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import './style.scss';
</style>
