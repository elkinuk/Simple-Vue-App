<template>
  <div class="movie-item">
    <div class="movie-item__header">
      <h2 class="movie-item__title"> {{movie.title}} </h2>
      <span class="movie-item__release-date"> {{movie.release_date}} </span>
    </div>
    <div class="movie-item__body">
      <img class="movie-item__img" :src="movie.poster_path" height="400" />
      <span class="movie-item__genres"> {{movie.genres.join(', ')}} </span>
      <p class="movie-item__overview"> {{movie.overview}} </p>
      <LinkButton :to="`/film/${movie.id}`">
        <template v-slot:content>
          See more
        </template>
      </LinkButton>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
