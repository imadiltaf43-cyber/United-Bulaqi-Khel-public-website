import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// ==============================
// Get All Minerals
// ==============================

export const getMinerals = async (params = {}) => {
  const { data } = await API.get("/minerals", {
    params,
  });

  return data;
};

// ==============================
// Get Single Mineral
// ==============================

export const getMineral = async (id) => {
  const { data } = await API.get(`/minerals/${id}`);

  return data;
};