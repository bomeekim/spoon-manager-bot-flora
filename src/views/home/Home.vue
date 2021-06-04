<template>
  <v-card elevation="0">
    <v-card-text v-if="!isLoggedIn">
      <login-guide />
    </v-card-text>
    <v-card-text v-else>
      <welcome-card />
      <today-card />
    </v-card-text>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import LoginGuide from '../../components/LoginGuide.vue';
import WelcomeCard from './components/WelcomeCard.vue';
import TodayCard from './components/TodayCard.vue';

const {
  mapGetters: mapGettersApp,
} = createNamespacedHelpers('app');

export default {
  name: 'Home',

  components: {
    WelcomeCard,
    LoginGuide,
    TodayCard,
  },

  computed: {
    ...mapGettersApp([
      'isLoggedIn',
    ]),
  },
};
</script>

<style scoped>
</style>
