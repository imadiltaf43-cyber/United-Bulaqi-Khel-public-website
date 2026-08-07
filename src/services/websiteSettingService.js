import axios from "axios";

const API = "http://localhost:5000/api/website-settings";

// =======================================
// Get Website Settings
// =======================================

export const getWebsiteSettings = async () => {

    const response = await axios.get(API);

    return response.data;

};