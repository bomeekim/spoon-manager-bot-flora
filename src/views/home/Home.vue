<template>
  <v-card elevation="0">
    <v-card-text v-if="!isLoggedIn">
      <login-guide />
    </v-card-text>
    <v-card-text v-else>
      <welcome-card />
      <today-card />
      <fan-board-card
        v-if="messageList.length > 0"
        :message-list="messageList"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import LoginGuide from '../../components/LoginGuide.vue';
import WelcomeCard from './components/WelcomeCard.vue';
import TodayCard from './components/TodayCard.vue';
import FanBoardCard from './components/FanBoardCard.vue';
import { SPOON_CAST_API } from '../../api/spooncast';

const {
  mapGetters: mapGettersApp,
} = createNamespacedHelpers('app');

export default {
  name: 'Home',

  components: {
    WelcomeCard,
    LoginGuide,
    TodayCard,
    FanBoardCard,
  },

  data: () => ({
    messageList: [],
    next: null,
  }),

  computed: {
    ...mapGettersApp([
      'userInfo',
      'isLoggedIn',
    ]),
  },

  watch: {
    'userInfo.id': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.getFanBoardMessages();
        }
      },
    },
  },

  methods: {
    async getFanBoardMessages() {
      try {
        // const { next, results } = await SPOON_CAST_API.FAN_BOARD(this.userInfo.id);
        const { next, results } = await SPOON_CAST_API.FAN_BOARD(7210878);

        if (results) {
          this.next = next;
          this.messageList = results;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
</style>
