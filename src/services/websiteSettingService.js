import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/website-settings`;

// =======================================
// Get Website Settings
// =======================================

export const getWebsiteSettings = async () => {

    const response = await axios.get(API);

    return response.data;

};