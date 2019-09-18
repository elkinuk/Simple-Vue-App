<template>
  <form class="search-form" @submit="handleSubmit">
    <input
      class="search-form__input"
      type="text"
      name="searchValue"
      placeholder="Search..."
      v-model="searchValue"
    />
    <Toggle
      v-on:toggle-data="handleToggle"
      :labels="['title', 'genre']"
      text="Search by"
      name="searchBy"
      :checkedValue="searchType"
      class="search-form__toggle"
    />
    <input type="submit" value="Search" class="search-form__submit" />
  </form>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import './style.scss';
</style>
