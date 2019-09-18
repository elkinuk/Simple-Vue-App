import MovieCard from './component.vue';
import mockedMovies from '@/core/mock-data/movies.json';

export default [
  'MovieCard',
  () => ({
    components: { MovieCard },
    data: () => ({
      movie: mockedMovies.movies[0],
    }),
    template: `
      <MovieCard
        :movie="movie"
      />
    `,
  }),
];
