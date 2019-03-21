<template>
  <b-form-group
    class="FilterBox"
    :disabled="this.$store.state.weather.isLoading"
  >
    <label for="minTemp">Temperatura mínima</label>
      <b-form-input
          id="minTemp"
          type="text"
          v-model="minTemp"
      />
    <label for="maxTemp">Temperatura máxima</label>
      <b-form-input
          id="maxTemp"
          type="text"
          v-model="maxTemp"
          />
    <label for="weatherType">Estado del tiempo</label>
      <b-form-select
        :options="weatherTypes"
        v-model="weatherType"
        id="weatherType"
      >
        <option slot="first" :value="null">Elige...</option>
      </b-form-select>

  </b-form-group>

</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';

const filterComputed = filterKey => ({
  get() {
    return this.filters[filterKey];
  },
  set(value) {
    this.setFilter({ key: filterKey, value });
  },
});

export default {
  name: 'FilterBox',
  computed: {
    ...mapGetters({
      weatherTypes: 'weather/weatherTypes',
    }),
    ...mapState({
      filters: state => state.weather.filters,
    }),
    minTemp: filterComputed('minTemp'),
    maxTemp: filterComputed('maxTemp'),
    weatherType: filterComputed('weatherType'),
  },
  methods: {
    ...mapMutations({
      setFilter: 'weather/SET_FILTER',
    }),
  },
};

</script>

<style lang="scss" scoped>
.FilterBox{
  margin: 40px;
}
label {
  padding: 10px;
  margin-bottom: 0;
  margin-top: 10px;
}

</style >
