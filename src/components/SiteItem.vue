<template>
  <div>
    <v-list-item :to="isTypeItem ? `/site/${siteObject.id}`: undefined">
      <v-list-item-icon class="mr-4 align-self-center" v-if="isTypeDetail">
        <v-icon medium @click="functionBack">mdi-chevron-left</v-icon>
      </v-list-item-icon>

      <v-list-item-avatar size="50" class="align-self-center" :class="{'mr-4': isTypeDetail}">
        <v-img
          :src="get(siteObject.images, 0)"
          v-if="siteObject.images"
          :lazy-src="defaultImg"
        />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="siteObject.title"></v-list-item-title>
        <v-list-item-subtitle
          :inner-html.prop="siteObject.address | addressFormat"></v-list-item-subtitle>
        <v-list-item-subtitle
          v-if="siteObject.contacts"
          :inner-html.prop="siteObject.contacts.main | fullName"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action class="d-flex align-self-center justify-end flex-row" v-if="isTypeItem">
        <v-btn color="green" icon small outlined
          @click.prevent="onClickAdd" v-if="!existSiteInList(siteObject)">
          <v-icon
            color="green"
          >
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn color="red" icon small outlined @click.prevent="onClickRemove" v-else>
          <v-icon
            color="red"
          >
            mdi-close
          </v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon
            color="grey lighten-1"
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import get from 'lodash/get';
import defaultImg from '@/assets/img/default-site.jpg';
import { mapGetters } from 'vuex';

export default {
  name: 'SiteItem',
  data: () => ({
    defaultImg,
  }),
  props: {
    siteObject: {
      type: Object,
      required: true,
      default: null,
    },
    type: {
      type: String,
      default: 'item',
    },
    functionBack: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    isTypeItem() {
      return this.type === 'item';
    },
    isTypeDetail() {
      return this.type === 'detail';
    },
    ...mapGetters({
      existSiteInList: 'schedule/existSiteInList',
    }),
  },
  methods: {
    get,
    onClickAdd() {
      this.$store.dispatch('ui/openDialogAdd', this.siteObject);
    },
    onClickRemove() {
      this.$store.dispatch('ui/openDialogRemove', this.siteObject);
    },
  },
};
</script>

<style>

</style>
