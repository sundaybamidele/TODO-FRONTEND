// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-api-url.com/api', // Replace with your actual backend API URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
