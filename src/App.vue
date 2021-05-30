<template>
  <v-app class="pa-10">
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
        color="white"
        slider-color="white"
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-app-bar-title>
        <v-icon>mdi-cog-outline</v-icon>
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="rounded-b-lg glassmorphism">
      <v-container class="fill-height">
        <v-row>
          <v-col>
            <webview ref="webview" id="webview" src="https://spooncast.net/" style="width:100%; height:100%;" allowpopups></webview>
          </v-col>
          <v-col class="main pl-0">
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item"
              >
                <v-card
                  flat
                >
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    tab: null,
    items: [
      '홈', '명령어', '시그니쳐', '신청곡', '방송 정보',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
};
</script>

<style lang="scss">
@import 'src/scss/index.scss';

.v-app-bar {
  top: 32px !important;
  margin-left: 32px;
  margin-right: 32px;
}

.container {
  max-width: 100% !important;
}

.row {
  height: inherit;
  width: inherit;
}

.col {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
