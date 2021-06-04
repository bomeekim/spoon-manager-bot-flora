<template>
  <content-section
    title="오늘은?"
    remove-default-card
  >
    <template v-slot:card>
      <v-row>
        <v-col>
          <v-card
            class="default-v-card"
            elevation="0"
            height="150"
          >
            <v-card-title>
              🗓 스푼과 {{ calculatedSpoonJoinDays }}일째
            </v-card-title>
            <v-card-text>
              스푼과 함께한지 벌써 {{ calculatedSpoonJoinDays }}일이나 되었어요!
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                color="#ff4100"
                rounded
                outlined
                small
              >
                더보기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="default-v-card"
            elevation="0"
          >
            <v-card-title>👻 팔로워 {{ userInfo.follower_count }}</v-card-title>
            <v-card-text>
              어제보다 팔로워가 N명 증가했어요!
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                color="#ff4100"
                rounded
                outlined
                small
              >
                더보기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>팬보드 영역</v-row>
    </template>
  </content-section>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
import ContentSection from '../../../components/ContentSection.vue';

const {
  mapGetters: mapGettersApp,
} = createNamespacedHelpers('app');

export default {
  name: 'TodayCard',

  components: {
    ContentSection,
  },

  computed: {
    ...mapGettersApp([
      'userInfo',
    ]),

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
