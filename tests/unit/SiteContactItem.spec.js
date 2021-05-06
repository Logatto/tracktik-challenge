import { shallowMount, createLocalVue } from '@vue/test-utils';
import SiteContactItem from '@/components/SiteContactItem.vue';
import filters from '@/filters';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
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
      getters: {},
    },
  };
  return { propsData, stubs, mocks };
}

const factory = (config) => shallowMount(SiteContactItem, {
  propsData: config.propsData,
  stubs: config.stubs,
  mocks: config.mocks,
  localVue,
});

describe('SiteContactItem.vue', () => {
  it('renders props when passed', () => {
    const icon = 'mdi-account';
    const title = 'Text title';
    const subtitle = 'Text subtitle';
    const config = createConfig({ icon, title, subtitle });
    const wrapper = factory(config);

    expect(wrapper.find('v-icon-stub').text()).toEqual(icon);
    expect(wrapper.find('v-list-item-title-stub').text()).toEqual(title);
    expect(wrapper.find('v-list-item-subtitle-stub').text()).toEqual(subtitle);
  });
});
