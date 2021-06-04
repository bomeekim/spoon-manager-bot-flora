<template>
  <content-section
    class="content-welcome-wrapper"
    remove-default-css
  >
    <template v-slot:card>
      <v-row class="px-6">
        <v-col cols="">
          <v-card-title>
            <p class="text-h6 font-weight-bold">
              👋 반가워요, {{ userInfo.nickname }}님!
            </p>
          </v-card-title>
          <v-card-text>
            <p class="text-body-2 pb-7">
              {{ welcomeText }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="btn-broadcast"
              color="#ff4100"
              rounded
              depressed
              width="100"
            >
              방송하기
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col
          cols="4"
          class="my-6"
        >
          <v-img
            src="../../../assets/login.svg"
            contain
          />
        </v-col>
      </v-row>
    </template>
  </content-section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import ContentSection from '../../../components/ContentSection.vue';

const {
  mapGetters: mapGettersApp,
} = createNamespacedHelpers('app');

export default {
  name: 'WelcomeCard',

  components: {
    ContentSection,
  },

  computed: {
    ...mapGettersApp([
      'userInfo',
    ]),

    welcomeText() {
      const sentences = [
        `오늘도 ${this.userInfo.nickname}님의 목소리를 들려주세요`,
        '오늘 방송도 활기차게 시작해볼까요?',
        `${this.userInfo.nickname}님의 목소리는 스푼의 보물이에요`,
        `스푸너들이 ${this.userInfo.nickname}님의 목소리를 기다려요`,
        ...(!this.userInfo.is_choice && ['오늘도 초이스 DJ가 되기 위해 열심히 달려보아요']),
      ];

      return sentences[Math.floor(Math.random() * sentences.length)];
    },
  },
};
</script>

<style scoped>
.content-welcome-wrapper {
  background-image:
    url(https://www.transparenttextures.com/patterns/cubes.png),
    linear-gradient(to left, #f64f59, #c471ed, #12c2e9);
  /*linear-gradient(*/
  /*  to right top,*/
  /*  #cf4af3,*/
  /*  #e73bd7,*/
  /*  #f631bc,*/
  /*  #fd31a2,*/
  /*  #ff3a8b,*/
  /*  #ff4b78,*/
  /*  #ff5e68,*/
  /*  #ff705c,*/
  /*  #ff8c51,*/
  /*  #ffaa49,*/
  /*  #ffc848,*/
  /*  #ffe652*/
  /*);*/
}

.btn-broadcast {
  color: white;
  font-weight: bold;
}
</style>
