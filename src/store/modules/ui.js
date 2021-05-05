const state = {
  dialog: {
    dialogAdd: false,
    dialogRemove: false,
    currentSite: null,
  },
  snackbar: {
    timeout: 2000,
    title: null,
    isActive: false,
  },
};

const actions = {
  openDialogAdd({ commit }, siteObject = {}) {
    commit('SET_CURRENT_SITE', siteObject);
    commit('SET_DIALOG', { name: 'dialogAdd', value: true });
  },
  closeDialogAdd({ commit }) {
    commit('SET_CURRENT_SITE', null);
    commit('SET_DIALOG', { name: 'dialogAdd', value: false });
  },
  openDialogRemove({ commit }, siteObject = {}) {
    commit('SET_CURRENT_SITE', siteObject);
    commit('SET_DIALOG', { name: 'dialogRemove', value: true });
  },
  closeDialogRemove({ commit }) {
    commit('SET_CURRENT_SITE', null);
    commit('SET_DIALOG', { name: 'dialogRemove', value: false });
  },
  openSnackBar({ commit }, { title = null, style = '' }) {
    commit('SET_SNACKBAR', { title, isActive: true, style });
  },
};

const mutations = {
  SET_DIALOG(state, { name, value }) {
    state.dialog[name] = value;
  },
  SET_CURRENT_SITE(state, currentSite) {
    state.dialog.currentSite = currentSite;
  },
  SET_SNACKBAR(state, { title, isActive, style }) {
    state.snackbar.title = title;
    state.snackbar.isActive = isActive;
    state.snackbar.style = style;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
