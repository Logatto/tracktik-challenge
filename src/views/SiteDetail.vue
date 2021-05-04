<template>
  <v-card
    class="mx-auto"
  >
    <v-list three-line class="blue" dark>
      <site-item :site-object="site" type="detail" :function-back="goBack" />
    </v-list>

    <v-img :src="get(site.images, 1)" max-height="400" contain/>

    <v-list two-line v-if="site.contacts">
      <site-contact-item icon="mdi-account"
        :title="site.contacts.main | fullName"
        :subtitle="site.contacts.main.jobTitle"/>
      <site-contact-item icon="mdi-phone"
        :title="site.contacts.main.phoneNumber"/>
      <site-contact-item icon="mdi-email" :title="site.contacts.main.email"/>
      <site-contact-item icon="mdi-map-marker"
        :title="site.contacts.main.address | addressFormat"/>
    </v-list>
  </v-card>
</template>
<script>

import SiteItem from '@/components/SiteItem.vue';
import SiteContactItem from '@/components/SiteContactItem.vue';
import { mapState } from 'vuex';
import get from 'lodash/get';

export default {
  name: 'SiteDetail',
  components: {
    SiteItem,
    SiteContactItem,
  },
  data: () => ({}),
  methods: {
    goBack() {
      return this.$router.push('/');
    },
    get,
  },
  computed: {
    ...mapState({ site: (state) => state.site.siteDetail }),
  },
  async mounted() {
    const { id } = this.$route.params;
    await this.$store.dispatch('site/getSiteById', id);
  },
};
</script>
