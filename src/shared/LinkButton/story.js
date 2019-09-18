import LinkButton from './component.vue';

export default [
  'LinkButton',
  () => ({
    components: { LinkButton },
    props: {
      to: '/test',
    },
    template: "<LinkButton :to='to'><template v-slot:content>Link Button</template</LinkButton>",
  }),
];
