import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Get All Projects
export const getProjects = async (params = {}) => {
  const { data } = await API.get("/projects", {
    params,
  });

  return data;
};

// Get Single Project
export const getProject = async (id) => {
  const { data } = await API.get(`/projects/${id}`);

  return data;
};