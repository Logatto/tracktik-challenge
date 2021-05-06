import { shallowMount, createLocalVue } from '@vue/test-utils';
import SiteItem from '@/components/SiteItem.vue';
import siteData from './fixtures/siteData';
import filters from '@/filters';
import Vuex from "vuex";
import Vuetify from 'vuetify'
import Vue from 'vue';

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.filter(filters);
localVue.use(Vuex);

function createConfig(props = {}) {
  const propsData = props;
  const stubs = {};
  const mocks = {
    $store: {
      state: {},
      dispatch: () => {},
      getters: {
        'schedule/existSiteInList': () => {},
      }
    },
  };
  return Object.assign({ propsData, stubs, mocks });
}

const factory = (config) => {
  return shallowMount(SiteItem, {
    propsData: config.propsData,
    stubs: config.stubs,
    mocks: config.mocks,
    localVue,
  });
};

describe('SiteItem.vue', () => {
  it('renders props when passed', () => {
    const config = createConfig({ siteObject: siteData });
    const wrapper = factory(config);

    const { addressFormat } =  wrapper.vm.$options.filters;

    const addressFormatString =addressFormat(siteData.address);

    expect(wrapper.find('v-list-item-title-stub').text()).toEqual(siteData.title);
    expect(wrapper.find('v-list-item-subtitle-stub').text()).toEqual(addressFormatString);
  });

  it('renders type item', () => {
    const config = createConfig({ siteObject: siteData, type: 'item' });
    const wrapper = factory(config);

    expect(wrapper.find('v-list-item-action-stub').exists()).toBeTruthy();
    expect(wrapper.find('v-icon-stub').text()).toEqual('mdi-plus');
  });

  it('renders type detail', () => {
    const config = createConfig({ siteObject: siteData, type: 'detail' });
    const wrapper = factory(config);

    expect(wrapper.find('v-list-item-action-stub').exists()).toBeFalsy();
    expect(wrapper.find('v-icon-stub').text()).toEqual('mdi-chevron-left');
  });
});
