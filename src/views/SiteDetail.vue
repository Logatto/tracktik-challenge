<template>
  <v-card
    class="mx-auto"
  >
    <v-list three-line class="blue" dark>
      <template>
        <v-list-item
          :key="item.name"
        >
          <v-list-item-icon class="mr-4 align-self-center">
            <v-icon medium @click="goBack">mdi-chevron-left</v-icon>
          </v-list-item-icon>

          <v-list-item-avatar size="50" class="mr-4 align-self-center">
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.address"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.contact"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="blue">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Hugh Windler</v-list-item-title>
          <v-list-item-subtitle>National Applications Planner</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="blue">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="blue">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="blue">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: 'SiteDetail',
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
