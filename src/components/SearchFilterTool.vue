<template>
  <v-text-field
    label="Search site"
    placeholder="Type to search a site"
    outlined
    dense
    hide-details="auto"
    class="my-2 mx-2"
    clearable
    @keydown.enter="onEventSearch"
    @click:clear="onClear"
    v-model="value"
    >
    <template v-slot:append-outer>
      <v-icon @click="onEventSearch">
        mdi-magnify
      </v-icon>
      <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="mx-2" v-bind="attrs" v-on="on">
          mdi-filter
        </v-icon>
      </template>
      <v-card
        flat
        class="py-1"
      >
        <v-card-text>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="12">
              <p class="text-center mb-1">
                Order By Name
              </p>
            </v-col>
            <v-btn-toggle
              v-model="sortOrder"
              @change="onSortChange"
            >
              <v-btn value="asc">
                <v-icon>mdi-sort-alphabetical-ascending</v-icon>
              </v-btn>
              <v-btn value="desc">
                <v-icon>mdi-sort-alphabetical-descending</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-row>
        </v-card-text>
      </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'SearchFilterTool',
  data: () => ({
    value: null,
    sortOrder: null,
  }),
  methods: {
    onEventSearch() {
      this.$emit('search', this.value);
    },
    onClear() {
      this.$emit('search', null);
    },
    onSortChange() {
      this.$emit('order', this.sortOrder);
    },
  },
};
</script>

<style>

</style>
