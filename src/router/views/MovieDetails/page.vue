<template>
  <div>
    <MovieCard :movie="currentMovie"/>
    <SubHeader>
      <template v-slot:left>
        <span>Films by {{ genre }} genre</span>
      </template>
      <template v-slot:right>
        <span>Here it is 10 films</span>
      </template>
    </Subheader>
    <MovieList :movies="movies"/>
  </div>
</template>

<script src="./script.js"></script>
