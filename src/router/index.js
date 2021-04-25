import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/site/:id',
    name: 'SiteDetail',
    component: () => import('../views/SiteDetail.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
