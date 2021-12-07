import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-206-224-219.compute-1.amazonaws.com:8080/'
});

export default api;