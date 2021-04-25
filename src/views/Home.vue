<template>
  <div class="home">
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

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-list-item
          :key="item.name"
          to="/site/1"
        >
          <v-list-item-avatar size="50" class="align-self-center">
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.address"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.contact"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="align-self-center">
            <v-icon
              color="grey lighten-1"
            >
              mdi-chevron-right
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data: () => ({
    items: [
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ1',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ2',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ3',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ1',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ2',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ3',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ1',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ2',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ3',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ1',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ2',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
      {
        image: 'http://lorempixel.com/640/480/city',
        name: 'Electronics HQ3',
        address: '611 Miller Glen',
        contact: '533.880.9306 x0425',
      },
    ],
  }),
  methods: {},
};
</script>
