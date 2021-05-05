<template>
  <v-app id="app">
    <v-navigation-drawer
      color="blue"
      dark
      v-model="drawer"
      app
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          TrackTik
        </v-list-item-title>
        <v-list-item-subtitle>
          Dashboard
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in menus"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    </v-navigation-drawer>

    <v-app-bar app color="blue" dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Scheduling</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

      <dialog-add-schedule />
      <dialog-remove-schedule />

      <v-snackbar
        v-model="snackbar.isActive"
        :color="snackbar.style"
        :timeout="snackbar.timeout"> {{ snackbar.title }}</v-snackbar>

    </v-main>
  </v-app>
</template>

<script>
import DialogAddSchedule from '@/components/DialogAddSchedule.vue';
import { mapState } from 'vuex';
import DialogRemoveSchedule from '@/components/DialogRemoveSchedule.vue';

export default {
  components: { DialogAddSchedule, DialogRemoveSchedule },
  data: () => ({
    drawer: null,
    menus: [
      { title: 'Sites', icon: 'mdi-domain', link: '/' },
      { title: 'Schedule List', icon: 'mdi-domain', link: '/schedule-list' },
    ],
  }),
  computed: {
    ...mapState({
      snackbar: (state) => state.ui.snackbar,
    }),
  },
};
</script>
