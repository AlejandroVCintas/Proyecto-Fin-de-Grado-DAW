import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5030/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// Exportamos los endpoints del backend
export const getSteps = async () => {
  const res = await api.get("/steps");
  return res.data;
};

export const addStep = async (step) => {
  const res = await api.post("/steps", step);
  return res.data;
};

export const deleteStep = async (id) => {
  await api.delete(`/steps/${id}`);
};

export const updateStep = async (id, step) => {
  const res = await api.put(`/steps/${id}`, step);
  return res.data;
};

export const getToday = async () => {
  const res = await api.get("/steps/today");
  return res.data;
};

export const getWeek = async () => {
  const res = await api.get("/steps/week");
  return res.data;
};

export const register = async (user) => {
  const res = await api.post("/auth/register", user);
  return res.data;
};

export const login = async (user) => {
  const res = await api.post("/auth/login", user);
  return res.data;
};

export default api;