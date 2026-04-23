import axios from "axios";

const API = "http://localhost:5030/api";

const api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json"
  }
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


// Endpoints de registro e inico de sesión (todavía no aplicados)

export const register = async (user) => {
  const res = await api.post("/auth/register", user);
  return res.data;
};

export const login = async (user) => {
  const res = await api.post("/auth/login", user);
  return res.data;
};