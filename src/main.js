// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import store from '@/store';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import App from './App';
import VLink from './components/VLink';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('VLink', VLink);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
