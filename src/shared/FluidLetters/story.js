import FluidLetters from './component.vue';

export default [
  'FluidLetters',
  () => ({
    components: { FluidLetters },
    template: '<div style="margin:0 auto; display: flex;"><FluidLetters><template v-slot:content>404</template></FluidLetters></div>',
  }),
];
