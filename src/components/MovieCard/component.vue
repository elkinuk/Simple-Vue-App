<template>
  <div class="movie-card">
    <div class="movie-card__header">
      <img class="movie-card__img" :src="movie.poster_path" height="400" />
    </div>
    <div class="movie-card__body">
      <div class="movie-card__line">
        <h2 class="movie-card__title">
          {{movie.title}}
          <span class="movie-card__vote_average"> {{movie.vote_average}} </span>
        </h2>
      </div>
      <div class="movie-card__subline">
        <span class="movie-card__genres"> {{movie.genres.join(', ')}} </span>
        <span class="movie-card__release_date"> {{movie.release_date}} </span>
        <span v-if="movie.runtime" class="movie-card__runtime"> {{movie.runtime}}min </span>
      </div>
      <p class="movie-card__overview"> {{movie.overview}} </p>
      <LinkButton to="/" cssClass="movie-card__link-back--cy">
        <template v-slot:content>
          Back
        </template>
      </LinkButton>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
