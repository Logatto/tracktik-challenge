<template>
  <div class="home">
    <search-filter-tool />

    <v-list three-line>
      <site-item v-for="(item, index) in sites" :key="index" :site-object="item" />
    </v-list>
  </div>
</template>

<script>
import SearchFilterTool from '@/components/SearchFilterTool.vue';
import SiteItem from '@/components/SiteItem.vue';
import { mapState } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'Home',
  components: {
    SearchFilterTool,
    SiteItem,
  },
  data: () => ({}),
  computed: {
    ...mapState({ sites: (state) => state.site.sites }),
  },
  methods: {
    async loadSites() {
      await this.$store.dispatch('site/getSites');
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
