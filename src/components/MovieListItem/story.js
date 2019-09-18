import MovieListItem from './component.vue';
import mockedMovies from '@/core/mock-data/movies.json';

export default [
  'MovieListItem',
  () => ({
    components: { MovieListItem },
    data: () => ({
      movie: mockedMovies.movies[0],
    }),
    template: `
      <MovieListItem
        :movie="movie"
      />
    `,
  }),
];
