<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      v-if="currentSite"
    >
      <v-card>
        <v-card-title class="headline">
          Add to schedule list.
        </v-card-title>
        <v-card-text>
          Do you want to add the site <b>{{ currentSite.title }}</b> to your Schedule?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="onCancel"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="onAdd"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DialogAddSchedule',
  data() {
    return {
      dialog1: true,
    };
  },
  computed: {
    ...mapState({
      dialog: (state) => state.ui.dialog.dialogAdd,
      currentSite: (state) => state.ui.dialog.currentSite,
    }),
  },
  methods: {
    onAdd() {
      this.$store.dispatch('schedule/addSiteToList', this.currentSite);
      this.$store.dispatch('ui/closeDialogAdd');
      this.$store.dispatch('ui/openSnackBar', { title: 'Site added correctly.', style: 'success' });
    },
    onCancel() {
      this.$store.dispatch('ui/closeDialogAdd');
    },
  },
};
</script>
