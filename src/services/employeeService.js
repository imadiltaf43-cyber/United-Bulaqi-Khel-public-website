import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Get all employees for public website
export const getEmployees = async () => {
  const { data } = await API.get("/employees", {
    params: {
      limit: 1000,
    },
  });

  return data;
};

// Get single employee
export const getEmployee = async (id) => {
  const { data } = await API.get(`/employees/${id}`);

  return data;
};

export default API;