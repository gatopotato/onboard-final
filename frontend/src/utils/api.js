import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:80/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  const response = await api.post("/mediaOwner/login", { email, password });
  localStorage.setItem("token", response.data.data.token);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post("/mediaOwner/signup", userData);
  return response.data;
};

export const fetchListings = async () => {
  const response = await api.get("/mediaOwner/listings");
  return response.data;
};

export const addListing = async (listingData) => {
  const response = await api.post("/listing", listingData);
  return response.data;
};

export default api;
