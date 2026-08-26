import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Get All Events (public, unauthenticated)
export const getEvents = async (params = {}) => {
  const { data } = await API.get("/sustainability-events", {
    params,
  });

  return data;
};

// Get Single Event
export const getEvent = async (id) => {
  const { data } = await API.get(`/sustainability-events/${id}`);

  return data;
};
