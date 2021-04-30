<template>
  <v-card
    class="mx-auto"
  >
    <v-list three-line class="blue" dark>
      <site-item :site-object="item" type="detail" :function-back="goBack" />
    </v-list>

    <v-list two-line>
      <site-contact-item icon="mdi-account" title="Title" subtitle="Subtitle"/>
      <site-contact-item icon="mdi-phone" title="Title" subtitle="Subtitle"/>
      <site-contact-item icon="mdi-email" title="Title" subtitle="Subtitle"/>
      <site-contact-item icon="mdi-map-marker" title="Title" subtitle="Subtitle"/>
    </v-list>
  </v-card>
</template>
<script>

import SiteItem from '@/components/SiteItem.vue';
import SiteContactItem from '@/components/SiteContactItem.vue';

export default {
  name: 'SiteDetail',
  components: {
    SiteItem,
    SiteContactItem,
  },
  data: () => ({
    item: {
      image: 'http://lorempixel.com/640/480/city',
      name: 'Electronics HQ',
      address: '611 Miller Glen',
      contact: '533.880.9306 x0425',
    },
  }),
  methods: {
    goBack() {
      return window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
};
</script>
