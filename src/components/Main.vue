<template>
  <v-main class="rounded-b-lg glassmorphism">
    <v-container class="fill-height">
      <v-row>
        <v-col>
          <webview
            id="webview"
            ref="webview"
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
              <router-view />
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
  mapMutations: mapMutationsApp,
} = createNamespacedHelpers('app');

export default {
  name: 'Main',

  computed: {
    ...mapGettersApp([
      'currentTab',
      'tabMenu',
    ]),
  },

  mounted() {
    const { webview } = this.$refs;

    webview.addEventListener('did-finish-load', this.handleDidFinishLoad);
    webview.addEventListener('new-window', (event) => {
      // SNS 로그인은 새 창으로 뜨기 때문에 해당 이벤트를 통해 체크한다.
      const isLoginBySns = event.url.indexOf('sns_type') !== -1;

      if (!!event && isLoginBySns) {
        setTimeout(this.handleLoginCheck, 3000);
      }
    });
  },

  methods: {
    ...mapMutationsApp([
      'setIsLoggedIn',
      'setUserInfo',
    ]),

    handleDidFinishLoad() {
      this.handleLoginCheck();
    },

    /**
     * 로그인 여부를 체크하는 함수
     * 로그인이 되어있을 경우 vuex 에 유저 정보를 저장한다.
     * @returns {Promise<void>}
     */
    async handleLoginCheck() {
      const authKey = await this.$refs.webview.executeJavaScript('localStorage.getItem(\'SPOONCAST_KR_authKey\')');
      const refreshKey = await this.$refs.webview.executeJavaScript('localStorage.getItem(\'SPOONCAST_KR_refreshToken\')');
      const userInfo = await this.$refs.webview.executeJavaScript('localStorage.getItem(\'SPOONCAST_KR_userInfo\')');

      this.setIsLoggedIn(!!authKey && !!refreshKey);

      if (userInfo) {
        this.setUserInfo({
          ...JSON.parse(userInfo),
          token: authKey,
        });
      }
    },
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
