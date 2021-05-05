import Vue from 'vue';
import Vuex from 'vuex';
import site from './modules/site';
import ui from './modules/ui';
import schedule from './modules/schedule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    site,
    ui,
    schedule,
  },
});
