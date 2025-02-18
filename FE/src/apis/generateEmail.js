import axios from "axios";

const API_URL = 'https://aiproduct-ymd0.onrender.com/api/generate-email-content' 

// || "https://aiproduct-ymd0.onrender.com/api/generate-email-content";

export const generateEmail = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error generating email:", error);
    throw new Error("Failed to generate email content. Please try again later.");
  }
};
