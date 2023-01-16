import axios from "axios";
import { environment } from "config/environment";

const { api: { uri } } = environment

const API = axios.create({
    baseURL: uri,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
});

API.interceptors.request.use((request) => {

  const token = localStorage.getItem('token')

  if (token) {
        
    request.headers.Authorization = `Bearer ${token}`;
  }
  
  return request;
});

API.interceptors.response.use((response) => {
  return response;
})

export default API;