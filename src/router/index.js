import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home.vue';
import Layout from '../pages/Layout.vue';
import Sass from '../pages/Sass.vue';
import Javascript from '../pages/Javascript.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/sass',
      name: 'Sass',
      component: Sass,
    },
    {
      path: '/javascript',
      name: 'Javascript',
      component: Javascript,
    },
  ],
});

export default router;
