import SubHeader from './component.vue';

export default [
  'SubHeader',
  () => ({
    components: { SubHeader },
    template: `
      <SubHeader>
        <template v-slot:left>
          <span>Films by Cartoon genres</span>
        </template>
        <template v-slot:right>
          <span>Here it is 10 films</span>
        </template>
      </Subheader>
    `,
  }),
];
