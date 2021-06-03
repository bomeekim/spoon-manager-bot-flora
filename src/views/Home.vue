<template>
  <v-card elevation="0">
    <v-card-text v-if="!isLoggedIn">
      <login-guide />
    </v-card-text>
    <v-card-text v-else>
      <v-card class="welcome-card">
        <v-card-title>
          <p class="text-h6 font-weight-bold">
            👋 반가워요, {{ userInfo.nickname }}님!
          </p>
        </v-card-title>
        <v-card-text>
          <p class="text-body-2">
            {{ welcomeText }}
          </p>
        </v-card-text>
      </v-card>
      <v-card class="spoon-d-day-card">
        <v-card-title class="text-h6 font-weight-bold">
          오늘은 {{ calculatedSpoonJoinDays }}일
        </v-card-title>
        <v-card-text class="text-body-2">
          {{ calculatedSpoonJoinDays }}일 동안 스푼과 함께했어요
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
import LoginGuide from '../components/LoginGuide.vue';

const {
  mapGetters: mapGettersApp,
} = createNamespacedHelpers('app');

export default {
  name: 'Home',

  components: {
    LoginGuide,
  },

  computed: {
    ...mapGettersApp([
      'isLoggedIn',
      'userInfo',
    ]),

    welcomeText() {
      const sentences = [
        `오늘도 ${this.userInfo.nickname}님의 목소리를 들려주세요`,
        '오늘 방송도 활기차게 시작해볼까요?',
        `${this.userInfo.nickname}님의 목소리는 스푼의 보물이에요`,
        `스푸너들이 ${this.userInfo.nickname}님의 목소리를 기다려요`,
      ];

      return sentences[Math.floor(Math.random() * sentences.length)];
    },

    calculatedSpoonJoinDays() {
      const today = moment();
      const joinDate = moment(this.userInfo.date_joined);
      return today.diff(joinDate, 'days');
    },
  },
};
</script>

<style scoped>
</style>
