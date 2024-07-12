import axios from 'axios';
const BaseUrl = import.meta.env.VITE_API_BASEURL

const api = axios.create({
  baseURL: BaseUrl,
});

export default api;