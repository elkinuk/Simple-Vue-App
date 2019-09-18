import MovieList from './component.vue';
import mockedMovies from '@/core/mock-data/movies.json';

export default [
  'MovieList',
  () => ({
    components: { MovieList },
    data: () => ({
      movies: mockedMovies.movies,
    }),
    template: `
      <MovieList
        :movies="movies"
      />
    `,
  }),
];
