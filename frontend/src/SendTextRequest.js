import React, { useState } from "react";
import axios from "axios"; 
import './SendTextRequestai.css';

function SendTextRequestai() {
  const [input, setInput] = useState(""); 
  const [response, setResponse] = useState(""); 

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/generate-text", {
        userMessage: input,  
      });

      // ✅ Extract only the text content from Gemini API response
      const aiText = res.data.reply?.parts?.map(part => part.text).join(" ") || "No response";

      setResponse(aiText); 
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Error connecting to AI");
    }
  };

  return (
    <div className="Aibox">
        <h1>Ai Support</h1>
        <div className="ai-container">
        <h2>Curious about your health? Ask me</h2>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="ai-input" // Added class name
            placeholder="Enter your question..."
        />
        <button onClick={sendRequest} className="ai-button">Send</button>
        <p className="ai-response"> {response}</p> 
        </div>
    </div>
  );
}

export default SendTextRequestai;
