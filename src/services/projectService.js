import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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