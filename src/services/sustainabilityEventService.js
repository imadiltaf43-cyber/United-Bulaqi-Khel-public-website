import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getSustainabilityEvents = async () => {
  const { data } = await API.get("/sustainability-events");
  return data;
};
