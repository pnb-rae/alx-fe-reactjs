import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`);
  return response.data;
};

