import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
  },
  plugins: [
    createPersistedState({
      key: 'FLORA_VUEX',
      paths: [
        'app.userInfo', // 스푼라디오 사용자 정보 (jwt)
        'app.isLoggedIn', // 로그인 유무
      ],
    }),
  ],
});
