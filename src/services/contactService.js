import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// ==========================
// Submit Contact Form
// ==========================

export const submitContact = async (formData) => {
  const { data } = await API.post("/contact", formData);
  return data;
};