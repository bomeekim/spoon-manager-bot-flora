<template>
  <content-section
    remove-default-card
  >
    <template v-slot:card>
      <v-card
        class="default-v-card"
        elevation="0"
        min-height="150"
        max-height="600"
      >
        <v-card-title>
          💌 나의 팬보드
        </v-card-title>
        <v-card-text>
          <v-list three-line>
            <template v-for="message in messageList">
              <v-list-item
                :key="message.name"
              >
                <v-list-item-avatar>
                  <v-img :src="message.author.profile_url" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    <p>
                      {{ message.author.nickname }}
                      <span class="ml-4 text-caption text--secondary">{{ message.created }}</span>
                    </p>
                  </v-list-item-title>
                  <v-list-item-subtitle v-html="message.contents" />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card-text>
        <v-card-actions
          v-if="isShowMore"
          class="justify-end"
        >
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
    </template>
  </content-section>
</template>

<script>
import ContentSection from '../../../components/ContentSection.vue';

export default {
  name: 'FanBoardCard',

  components: {
    ContentSection,
  },

  props: {
    messageList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  computed: {
    isShowMore() {
      return !!this.messageList && this.messageList.length > 0;
    },
  },
};
</script>

<style scoped>
.v-data-table, table, tbody, tr, td {
  background-color: transparent !important;
}
</style>
