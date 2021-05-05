<template>
  <div class="home">
    <search-filter-tool @search="onSearchByWord" @order="onOrder"/>

    <v-list three-line v-if="sites.length">
      <site-item v-for="(item, index) in sites" :key="index" :site-object="item" />
    </v-list>

    <empty-state
      v-else-if="sites.length === 0 && searchWord"
      icon="mdi-briefcase-search" title="No results to show"
    />

    <arrow-top />

  </div>
</template>

<script>
import SearchFilterTool from '@/components/SearchFilterTool.vue';
import SiteItem from '@/components/SiteItem.vue';
import EmptyState from '@/components/EmptyState.vue';
import ArrowTop from '@/components/ArrowTop.vue';
import { mapState } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'Home',
  components: {
    SearchFilterTool,
    SiteItem,
    EmptyState,
    ArrowTop,
  },
  data: () => ({
    searchWord: null,
    orderNameDirection: null,
  }),
  computed: {
    ...mapState({
      sites: (state) => state.site.sites,
    }),
  },
  methods: {
    async loadSites() {
      await this.$store.dispatch('site/getSites', { searchWord: this.searchWord, order: this.orderNameDirection });
    },
    onSearchByWord(value) {
      this.searchWord = value;
      this.$store.dispatch('site/resetCurrentPage');
      this.loadSites();
    },
    onOrder(value) {
      this.orderNameDirection = value;
      this.$store.dispatch('site/resetCurrentPage');
      this.loadSites();
    },
  },
  mounted() {
    this.onScrollDebounce = debounce(() => {
      const docElement = document.documentElement;
      if (docElement.scrollTop + docElement.clientHeight >= docElement.scrollHeight) {
        this.loadSites();
      }
    }, 250);

    window.addEventListener('scroll', this.onScrollDebounce);
    this.loadSites();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScrollDebounce);
  },
};
</script>
