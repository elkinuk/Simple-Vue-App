export default {
  name: 'Toggle',
  props: {
    labels: Array,
    text: String,
    name: String,
    checkedValue: String,
    values: Array,
  },
  data: function() {
    return {
      currrentValue: this.checkedValue,
    };
  },
  methods: {
    toggleData: function() {
      this.$emit('toggle-data', this.currrentValue);
    },
  },
};
