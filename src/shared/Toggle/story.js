import Toggle from './component.vue';

export default [
  'Toggle',
  () => ({
    components: { Toggle },
    template: `
      <Toggle
        :labels="['on', 'off']"
        text="Toggle"
        name="name"
        checkedValue="on"
      />
    `,
  }),
];
