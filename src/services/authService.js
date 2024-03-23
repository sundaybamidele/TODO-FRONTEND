// services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your backend API URL

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const logout = () => {
  // Implement logout functionality, e.g., clearing local storage or session
};

export default {
  login,
  logout,
};
