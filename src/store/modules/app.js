const state = {
  currentTab: null,
};

const getters = {
  currentTab: (state) => state.currentTab,
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
