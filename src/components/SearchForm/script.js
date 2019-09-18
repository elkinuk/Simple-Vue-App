import { Toggle } from '@/shared';

export default {
  name: 'SearchForm',
  components: { Toggle },
  props: {
    defaultSearchType: String,
  },
  data: function() {
    return {
      searchValue: '',
      searchType: this.defaultSearchType,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.searchValue.length > 3) {
        const data = {
          searchType: this.searchType,
          searchValue: this.searchValue,
        };
        this.$emit('search-movie', data);
      } else alert('IN THE SEARCH QUERY SHOULD BE 3+ SYMBOLS');
    },
    handleToggle(data) {
      this.searchType = data;
    },
  },
};
