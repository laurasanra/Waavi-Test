<template>
  <b-container class="Javascript">
    <b-row align-h="center">
      <b-col cols="12">
        <b-row align-h="center">
          <h1 class="Title">Javascript Page</h1>
        </b-row>
        <b-row align-h="center">
          <VLink to="Home">Back </VLink>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center" class="InputContainer">
      <b-form-input v-model="text"
        type="text"
        placeholder="Escribe el nombre de una ciudad"
        @keyup="handleSearch"
        class="SearchInput"
      />
    </b-row>
    <b-row align-h="center">
      <b-col cols="6" class="SearchText">Búsqueda: {{ searched }}</b-col>
      <b-col cols="6">
        <FilterBox />
      </b-col>
      <b-col cols="12" v-if="isLoading" class="SpinnerContainer">
        <b-spinner label="Loading..." class="Spinner"/>
      </b-col>
      <b-col cols="12" class="NoResultsText" v-else-if="noResults">
        No hay resultados para la búsqueda
      </b-col>
      <b-col cols="12" v-else>
        <CityList />
      </b-col>
     </b-row>
  </b-container>
</template>

<script>
import {
  mapActions, mapMutations, mapState,
} from 'vuex';
import { debounce } from 'lodash';
import CityList from '../components/CityList';
import FilterBox from '../components/FilterBox';

export default {
  name: 'Javascript',
  components: {
    CityList,
    FilterBox,
  },
  data() {
    return {
      text: '',
    };
  },

  computed: {
    ...mapState({
      isLoading: state => state.weather.isLoading,
      noResults: state => state.weather.noResults,
    }),
    searched() {
      return this.$store.state.weather.searched;
    },
  },

  methods: {
    ...mapActions({
      getWeatherInfo: 'weather/getWeatherInfo',
    }),
    ...mapMutations({
      keepSearch: 'weather/SET_SEARCHED',
    }),
    handleSearch: debounce(function search() {
      this.keepSearch(this.text);
      this.getWeatherInfo();
    }, 600),

  },
};
</script>

<style lang="scss" scoped>

  .Title {
    margin: 20px
  }
  .InputContainer {
    width: 600px;
    margin: 30px auto;
  }
  .SearchText {
    padding-top: 60px;
    padding-left: 15px;
  }
  .Spinner {
    height: 200px;
    width: 200px;
    color: blue;
  }
  .SpinnerContainer {
    display: flex;
    justify-content: center;
    margin-top: 120px;
  }
  .SearchInput {
    text-align: center;
  }
  .NoResultsText {
    margin-top: 70px;
    text-align: center;
  }
</style>
