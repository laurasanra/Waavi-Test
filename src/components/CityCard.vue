<template>
    <b-card class="Card">
      <b-card-text>{{name}}</b-card-text>
      <b-card-text>{{temperature}}</b-card-text>
      <b-card-text>{{weather}}</b-card-text>
      <b-img :src="iconSrc" class="WeatherIcon" />
    </b-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'CityCard',
  props: {
    name: VueTypes.string.isRequired,
    temperature: VueTypes.number,
    weather: VueTypes.string.isRequired,
    iconAbbreviation: VueTypes.string.isRequired,
  },
  computed: {
    iconSrc() {
      return `https://www.metaweather.com/static/img/weather/${this.iconAbbreviation}.svg`;
    },
  },
};

</script>

<style lang="scss" scoped>
.Card {
  text-align: center
}
.WeatherIcon{
  height: 30px;
  width: 30px;
}
</style>
