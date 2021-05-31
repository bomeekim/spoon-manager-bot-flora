<template>
  <v-main class="rounded-b-lg glassmorphism">
    <v-container class="fill-height">
      <v-row>
        <v-col>
          <webview
            ref="webview"
            id="webview"
            src="https://spooncast.net/"
            style="width:100%; height:100%;"
            allowpopups
          />
        </v-col>
        <v-col class="main pl-0">
          <v-tabs-items v-model="currentTab">
            <v-tab-item
              v-for="item in tabMenu"
              :key="item"
            >
              <v-card
                flat
              >
                <v-card-text>{{ item }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapGetters: mapGettersApp,
  mapMutations: mapMutationsApp
} = createNamespacedHelpers('app');

export default {
  name: 'Main',

  computed: {
    ...mapGettersApp([
      'currentTab',
      'tabMenu',
    ]),
  },
};
</script>

<style scoped>

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
