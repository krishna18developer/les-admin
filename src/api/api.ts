import axios from 'axios'

const API_URL = process.env.REACT_APP_LES_API_URL;

const api = axios.create({
  baseURL: API_URL
});

export default api;  