<template>
  <div>
    <div v-if="movies && movies.length" class="movie-list">
      <MovieItem v-for="movie in movies" :movie="movie" :key="movie.title + movie.id" />
    </div>
    <div v-else class="movie-list">
      <span class="movie-list__message"> No movies that match your query </span>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import './style.scss';
</style>
