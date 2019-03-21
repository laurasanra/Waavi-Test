<template>
    <b-row
    class="List"
    >
      <b-col cols="12">
        <p v-if="cities.length > 0" class="AverageText">Temperatura media: {{average}}</p>
      </b-col>
      <b-col
        cols="4"
        v-for="city in cities"
        :key="city.woeid"
      >
      <CityCard
        :name="city.name"
        :temperature="city.temperature"
        :weather="city.weather"
        :iconAbbreviation="city.iconAbbreviation"
      />
      </b-col>
    </b-row>
</template>

<script>
import {
  mapGetters,
} from 'vuex';
import CityCard from '../components/CityCard';

export default {
  name: 'CityList',
  components: {
    CityCard,
  },
  computed: {
    ...mapGetters({
      average: 'weather/average',
      cities: 'weather/filteredCities',
    }),
  },
};

</script>

<style lang="scss" scoped>
.AverageText{
    margin: 50px 0;
    text-align: center;
  }
</style>
