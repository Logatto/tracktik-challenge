<template>
  <v-text-field
    label="Search site"
    placeholder="Type to search a site"
    outlined
    dense
    hide-details="auto"
    class="my-2 mx-2"
    >
    <template v-slot:append-outer>
      <v-icon >
        mdi-magnify
      </v-icon>
      <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="mx-2" v-bind="attrs" v-on="on">
        mdi-filter
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
              <v-icon>mdi-sort-alphabetical-ascending</v-icon>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
              <v-icon>mdi-sort-alphabetical-descending</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'SearchFilterTool',

};
</script>

<style>

</style>
