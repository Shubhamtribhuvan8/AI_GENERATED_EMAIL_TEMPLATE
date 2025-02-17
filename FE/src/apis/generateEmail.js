import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8001/api/generate-email-content";

export const generateEmail = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error generating email:", error);
    throw new Error("Failed to generate email content. Please try again later.");
  }
};
