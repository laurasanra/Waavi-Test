import Vue from 'vue';
import Vuex from 'vuex';
import weather from './weather/weatherStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
  },
});
