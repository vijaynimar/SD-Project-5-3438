import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas

const QRCodeGenerator = () => {
  const [text, setText] = useState(""); // State to store user input

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <br />
      {text && (
        <QRCodeCanvas value={text} size={200} level="H" />
      )}
    </div>
  );
};

export default QRCodeGenerator;
