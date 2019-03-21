import { uniq } from 'lodash';
import actions from './weatherActionsStore';

const initialState = {
  searched: '',
  locationsList: [],
  isLoading: false,
  noResults: false,
  filters: {
    minTemp: null,
    maxTemp: null,
    weatherType: null,
  },
};

const mutations = {
  SET_SEARCHED(state, searched) {
    state.searched = searched;
  },
  SET_LOCATIONS(state, info) {
    state.locationsList = [...info];
  },
  SET_LOADING(state) {
    state.isLoading = true;
  },
  UNSET_LOADING(state) {
    state.isLoading = false;
  },
  SET_NORESULTS(state) {
    state.noResults = true;
  },
  UNSET_NORESULTS(state) {
    state.noResults = false;
  },
  SET_FILTER(state, { key, value }) {
    if (state.filters[key] !== undefined) state.filters[key] = value;
  },
  CLEAN_FILTERS(state) {
    state.filters = { ...initialState.filters };
  },
};

const getters = {
  average: (state, get) => {
    const filteredTemperatures = get.filteredCities.filter(location => location.temperature !== null);
    const sum = filteredTemperatures.reduce((acc, location) => acc + location.temperature, 0);
    const avg = sum / filteredTemperatures.length;
    return avg.toFixed(2);
  },
  weatherTypes: (state, g) => uniq(g.filteredCities.map(location => location.weather)),
  filteredCities: (state) => {
    const { locationsList, filters } = state;
    return locationsList.filter((location) => {
      if (filters.weatherType && location.weather !== filters.weatherType) return false;
      if (filters.maxTemp && location.temperature >= filters.maxTemp) return false;
      if (filters.minTemp && location.temperature <= filters.minTemp) return false;
      return true;
    });
  },
};

export default {
  namespaced: true,
  state: {
    ...initialState,
  },
  mutations,
  getters,
  actions,
};
