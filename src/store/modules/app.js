const state = {
  currentTab: null,
  tabMenu: ['홈', '명령어', '시그니쳐', '신청곡', '방송 정보'],
};

const getters = {
  currentTab: (state) => state.currentTab,
  tabMenu: (state) => state.tabMenu,
};

const actions = {
};

const mutations = {
  setCurrentTab: (state, currentTab) => {
    state.currentTab = currentTab;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
