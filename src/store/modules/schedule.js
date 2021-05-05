import filter from 'lodash/filter';
import find from 'lodash/find';

const state = {
  scheduleList: [],
};

const getters = {
  existSiteInList: (state) => (siteObject) => {
    const { id } = siteObject;
    return !!find(state.scheduleList, (val) => val.id === id);
  },
};

const actions = {
  addSiteToList({ commit }, siteObject = {}) {
    commit('ADD_SITE', siteObject);
  },
  removeSiteToList({ commit }, siteObject = {}) {
    commit('REMOVE_SITE', siteObject);
  },
};

const mutations = {
  ADD_SITE(state, siteObject) {
    state.scheduleList.push(siteObject);
  },
  REMOVE_SITE(state, siteObject) {
    const { id } = siteObject;
    state.scheduleList = filter(state.scheduleList, (val) => val.id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
