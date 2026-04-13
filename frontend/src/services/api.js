import axios from "axios";

const API = "http://localhost:5030/api/steps";

export const getSteps = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addStep = async (step) => {
  const res = await axios.post(API, step);
  return res.data;
};