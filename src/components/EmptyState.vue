<template>
  <v-container class="d-flex justify-center  align-center flex-column my-6">
    <v-icon large>{{ icon }}</v-icon>
    <p class="font-weight-medium py-2">{{ title }}</p>
  </v-container>
</template>
<script>
export default {
  name: 'EmptyState',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
