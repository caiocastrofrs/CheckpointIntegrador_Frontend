import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-209-206-54.compute-1.amazonaws.com:8080'
});

export default api;