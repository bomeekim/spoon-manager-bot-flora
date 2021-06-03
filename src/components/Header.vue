<template>
  <v-app-bar
    app
    class="rounded-t-lg glassmorphism"
    flat
    hide-on-scroll
  >
    <v-tabs
      v-model="tab"
      centered
      background-color="transparent"
      color="black"
      slider-color="black"
    >
      <v-tab
        v-for="item in tabMenu"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-app-bar-title>
      <v-icon>mdi-cog-outline</v-icon>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapGetters: mapGettersApp,
  mapMutations: mapMutationsApp,
} = createNamespacedHelpers('app');

export default {
  name: 'Header',

  data: () => ({
    tab: null,
    text: 'Hello',
  }),

  computed: {
    ...mapGettersApp([
      'tabMenu',
    ]),
  },

  watch: {
    tab(newVal) {
      this.setCurrentTab(newVal);
    },
  },

  methods: {
    ...mapMutationsApp([
      'setCurrentTab',
    ]),
  },
};
</script>

<style scoped>
.v-app-bar {
  top: 32px !important;
  margin-left: 32px;
  margin-right: 32px;
}
</style>
