import SearchForm from './component.vue';

export default [
  'SearchForm',
  () => ({
    components: { SearchForm },
    template: '<SearchForm defaultSearchType="title"/>',
  }),
];
