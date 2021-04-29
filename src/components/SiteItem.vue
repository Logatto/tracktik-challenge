<template>
  <div>
    <v-list-item
      to="/site/1"
    >
      <v-list-item-avatar size="50" class="align-self-center">
        <v-img :src="siteObject.image"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="siteObject.name"></v-list-item-title>
        <v-list-item-subtitle v-html="siteObject.address"></v-list-item-subtitle>
        <v-list-item-subtitle v-html="siteObject.contact"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action class="align-self-center">
        <v-icon
          color="grey lighten-1"
        >
          mdi-chevron-right
        </v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'SiteItem',
  props: {
    siteObject: {
      type: Object,
      required: true,
      default: null,
    },
  },
};
</script>

<style>

</style>
