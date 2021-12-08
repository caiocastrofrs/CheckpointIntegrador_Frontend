import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bodegadh.herokuapp.com'
});

export default api;