import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ======================================
// Get All Employees
// ======================================

export const getEmployees = async (params = {}) => {
  const { data } = await API.get("/employees", {
    params,
  });

  return data;
};

// ======================================
// Get Single Employee
// ======================================

export const getEmployee = async (id) => {
  const { data } = await API.get(`/employees/${id}`);

  return data;
};