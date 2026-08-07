import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all investors
export const getInvestors = async (params = {}) => {
  const { data } = await API.get("/investors", {
    params,
  });

  return data;
};

// Get investors by village
export const getInvestorsByVillage = async (village) => {
  const { data } = await API.get("/investors", {
    params: {
      village,
    },
  });

  return data;
};

// Get one investor
export const getInvestor = async (id) => {
  const { data } = await API.get(`/investors/${id}`);

  return data;
};