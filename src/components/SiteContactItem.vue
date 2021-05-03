<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="blue">
          {{ icon }}
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-html="title"></v-list-item-title>
        <v-list-item-subtitle v-html="subtitle"></v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-divider inset></v-divider>
  </div>
</template>

<script>
export default {
  name: 'SiteContactItem',
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style>

</style>
