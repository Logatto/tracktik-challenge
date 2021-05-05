<template>
  <v-btn
    color="blue"
    fab
    large
    dark
    bottom
    right
    fixed
    @click="goToTop"
    class="btn-up"
  >
    <v-icon>mdi-arrow-up-circle</v-icon>
  </v-btn>
</template>

<script>
import goTo from 'vuetify/es5/services/goto';

export default {
  name: 'ArrowTop',
  methods: {
    goToTop() {
      goTo(0);
    },
  },
};
</script>
