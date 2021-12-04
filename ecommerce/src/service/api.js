import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-52-91-104-174.compute-1.amazonaws.com:8080'
});

export default api;