import axios from "axios";

const API_URL = "http://localhost:5000"; // Your backend URL

// Function to send a request to OpenAI API
export const fetchAIResponse = async (userMessage) => {
  try {
    const res = await axios.post(`${API_URL}/generate-text`, { userMessage });
    return res.data.reply; // Return AI response
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error getting response";
  }
};
