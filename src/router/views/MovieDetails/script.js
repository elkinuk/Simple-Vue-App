import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';

import { SubHeader } from '@/shared';

import mockedMovies from '@/core/mock-data/movies.json';

export default {
  name: 'movieDetails',
  components: { MovieCard, SubHeader, MovieList },
  data: () => ({
    movies: mockedMovies.movies,
  }),
  computed: {
    currentMovie: function() {
      return this.movies.find(el => el.id === +this.$route.params.id);
    },
    genre: function() {
      return this.currentMovie.genres[0];
    },
  },
  created: function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  updated: function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
};
