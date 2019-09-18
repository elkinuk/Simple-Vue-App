import MovieItem from '@/components/MovieListItem';

export default {
  name: 'MovieList',
  components: { MovieItem },
  props: { movies: Array },
};
