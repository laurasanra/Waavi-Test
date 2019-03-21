import Api from '../../api';

export const transformer = item => ({
  name: item.title,
  temperature: item.consolidated_weather[0].the_temp === null ? null :
    parseFloat((item.consolidated_weather[0].the_temp).toFixed(2)),
  weather: item.consolidated_weather[0].weather_state_name,
  iconAbbreviation: item.consolidated_weather[0].weather_state_abbr,
});

export default {
  async getWeatherInfo({ commit }) {
    commit('CLEAN_FILTERS');
    commit('UNSET_NORESULTS');
    commit('SET_LOADING');
    const { data, ok } = await Api.list(this.state.weather.searched);
    if (ok && data.length > 0) {
      const apiCalls = data.map(location => Api.get(location.woeid));
      const responses = await Promise.all(apiCalls);
      const locations = responses.map(location => transformer(location.data));
      commit('SET_LOCATIONS', locations);
    } else {
      commit('SET_NORESULTS');
    }
    commit('UNSET_LOADING');
  },
};

