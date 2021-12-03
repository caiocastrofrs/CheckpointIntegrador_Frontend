import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-163-100-219.compute-1.amazonaws.com:8080'
});

export default api;