<template>
  <div>
    <SearchForm
      :defaultSearchType="searchMovieType"
      v-on:search-movie="setSearchMovie"/>
    <SubHeader>
        <template v-slot:left>
          <span>There are {{moviesLength}} films are found</span>
        </template>
        <template v-slot:right>
          <Toggle
            v-on:toggle-data="setSortMovies"
            :labels="['date', 'rating']"
            text="Sort by"
            name="sortBy"
            :checkedValue="sortMovieType"
          />
        </template>
      </Subheader>
    <MovieList
      :movies="movies"
    />
  </div>
</template>

<script src="./script.js"></script>
