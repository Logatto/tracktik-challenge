import Repository from '@/respositories/RepositoryFactory';

const SiteRepository = Repository.get('site');

const state = {
  siteDetail: {},
  sites: [],
  currentPage: 1,
};

const actions = {
  async getSites({ commit, state }) {
    const { currentPage } = state;

    if (currentPage == null) return;

    const result = await SiteRepository.getSitesPaginate({ page: currentPage });
    if (result.length) {
      if (currentPage > 1) {
        commit('APPEND_SITES', result);
      } else {
        commit('SET_SITES', result);
      }
      commit('INCREMENT_CURRENT_PAGE');
    } else {
      commit('COMPLETED_CURRENT_PAGE');
    }
  },
  async getSiteById({ commit }, id) {
    commit('SET_SITE_DETAIL', await SiteRepository.getSiteById(id));
  },
};

const mutations = {
  SET_SITES(state, sites) {
    state.sites = sites;
  },
  APPEND_SITES(state, sites) {
    state.sites.push(...sites);
  },
  INCREMENT_CURRENT_PAGE(state) {
    state.currentPage += 1;
  },
  COMPLETED_CURRENT_PAGE(state) {
    state.currentPage = null;
  },
  SET_SITE_DETAIL(state, siteDetail) {
    state.siteDetail = siteDetail;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
