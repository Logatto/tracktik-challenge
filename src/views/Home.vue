<template>
  <div class="home">
    <search-filter-tool />

    <v-list three-line>
      <site-item v-for="(item, index) in items" :key="index" :site-object="item" />
    </v-list>
  </div>
</template>

<script>
import SearchFilterTool from '@/components/SearchFilterTool.vue';
import SiteItem from '@/components/SiteItem.vue';

export default {
  name: 'Home',
  components: {
    SearchFilterTool,
    SiteItem,
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
