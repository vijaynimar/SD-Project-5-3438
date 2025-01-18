import React, { useState } from "react";

const SendTextRequest = () => {
  const [text, setText] = useState(""); // State to store input text
  const [response, setResponse] = useState(null); // State to store the full response (dishname, calories, img_url)

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/send-text", {
        method: "POST", // POST request to send data to backend
        headers: {
          "Content-Type": "application/json", // Send data as JSON
        },
        body: JSON.stringify({ text }), // Send the input text as JSON
      });

      const data = await response.json(); // Parse the response from backend
      console.log("Response from backend:", data); // Log the response in console

      // Update the state with the response data (dishname, calories, img_url)
      //setResponse(data);
    } catch (error) {
      console.error("Error sending request:", error); // Log errors if any
    }
  };

 
  
};

export default SendTextRequest;

