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
          Remove from schedule list.
        </v-card-title>
        <v-card-text>
          Do you want to remove the site <b>{{ currentSite.title }}</b> from your Schedule?
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
            color="red darken-1"
            text
            @click="onRemove"
          >
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DialogRemoveSchedule',
  data() {
    return {
      dialog1: true,
    };
  },
  computed: {
    ...mapState({
      dialog: (state) => state.ui.dialog.dialogRemove,
      currentSite: (state) => state.ui.dialog.currentSite,
    }),
  },
  methods: {
    onRemove() {
      this.$store.dispatch('schedule/removeSiteToList', this.currentSite);
      this.$store.dispatch('ui/closeDialogRemove');
      this.$store.dispatch('ui/openSnackBar', { title: 'Site removed correctly.', style: 'success' });
    },
    onCancel() {
      this.$store.dispatch('ui/closeDialogRemove');
    },
  },
};
</script>
