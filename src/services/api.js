import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust the base URL according to your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
