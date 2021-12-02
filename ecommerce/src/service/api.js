import axios from 'axios';

const api = axios.create({
  baseURL: 'ec2-52-207-209-33.compute-1.amazonaws.com:8080'
});

export default api;