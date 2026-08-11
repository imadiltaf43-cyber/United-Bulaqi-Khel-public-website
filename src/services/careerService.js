import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// ==========================
// JOBS
// ==========================

export const getJobs = async (params = {}) => {
  const { data } = await API.get("/jobs", {
    params,
  });

  return data;
};

export const getJob = async (id) => {
  const { data } = await API.get(`/jobs/${id}`);

  return data;
};

// ==========================
// APPLY JOB
// ==========================

export const applyJob = async (formData) => {
  const { data } = await API.post(
    "/job-applications/apply",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return data;
};