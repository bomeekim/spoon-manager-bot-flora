const state = {
  currentTab: null,
  tabMenu: ['홈', '명령어', '시그니쳐', '신청곡', '방송 정보'],
  isLoggedIn: false,
  userInfo: {},
};

const getters = {
  currentTab: (state) => state.currentTab,
  tabMenu: (state) => state.tabMenu,
  isLoggedIn: (state) => state.isLoggedIn,
  userInfo: (state) => state.userInfo,
};

const actions = {
};

const mutations = {
  setCurrentTab: (state, currentTab) => {
    state.currentTab = currentTab;
  },
  setIsLoggedIn: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn;
  },
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
