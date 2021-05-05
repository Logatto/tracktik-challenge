<template>
  <div class="schedule">

    <v-subheader class="text-subtitle-1">Schedule List</v-subheader>
    <v-list three-line v-if="scheduleList.length">
      <site-item v-for="(item, index) in scheduleList" :key="index" :site-object="item" />
    </v-list>

    <empty-state v-else icon="mdi-format-list-bulleted" title="No elements in the list." />

    <arrow-top />

  </div>
</template>
<script>
import SiteItem from '@/components/SiteItem.vue';
import ArrowTop from '@/components/ArrowTop.vue';
import EmptyState from '@/components/EmptyState.vue';
import { mapState } from 'vuex';

export default {
  name: 'ScheduleList',
  components: {
    SiteItem,
    ArrowTop,
    EmptyState,
  },
  computed: {
    ...mapState({
      scheduleList: (state) => state.schedule.scheduleList,
    }),
  },
};
</script>
