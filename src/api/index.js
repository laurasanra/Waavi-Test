import { create } from 'apisauce';

const api = create({
  baseURL: 'https://www.metaweather.com',
});

const Api = {
  list: searched => api.get(`/api/location/search/?query=${searched}`),
  get: cityId => api.get(`/api/location/${cityId}`),
};

export default Api;
