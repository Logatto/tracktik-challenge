import Repository from '@/respositories/RepositoryFactory';

const SiteRepository = Repository.get('site');
const limit = 10;

const state = {
  siteDetail: {},
  sites: [],
  currentPage: 1,
  totalCount: null,
};

const actions = {
  async getSites({ commit, state }, { searchWord = null, order = null }) {
    const { currentPage, totalCount } = state;
    const currentCount = limit * (currentPage - 1);

    if (totalCount != null && currentCount >= totalCount) return;

    const {
      result,
      meta,
    } = await SiteRepository.getSitesPaginate({
      page: currentPage, limit, searchWord, order,
    });

    if (currentPage > 1) {
      commit('APPEND_SITES', result);
    } else {
      commit('SET_SITES', result);
    }
    commit('SET_TOTAL_COUNT', meta.totalCount);
    commit('INCREMENT_CURRENT_PAGE');
  },
  async getSiteById({ commit }, id) {
    const { result } = await SiteRepository.getSiteById(id);
    commit('SET_SITE_DETAIL', result);
  },
  resetCurrentPage({ commit }) {
    commit('SET_CURRENT_PAGE', 1);
    commit('SET_TOTAL_COUNT', null);
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
  SET_CURRENT_PAGE(state, currentPage) {
    state.currentPage = currentPage;
  },
  SET_TOTAL_COUNT(state, totalCount) {
    state.totalCount = totalCount;
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
