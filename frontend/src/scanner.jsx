import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const CustomQRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");
  const qrCodeRef = useRef(null);

  const startScanning = () => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new Html5Qrcode("qr-reader");
    }

    qrCodeRef.current
      .start(
        { facingMode: "environment" }, // Use rear camera
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          setResult(decodedText);
          stopScanning(); // Stop scanning after successful scan
        },
        (errorMessage) => {
          console.log("QR Code scan failed: ", errorMessage);
        }
      )
      .then(() => setScanning(true))
      .catch((err) => console.error("Error starting scanner:", err));
  };

  const stopScanning = () => {
    if (qrCodeRef.current) {
      qrCodeRef.current.stop().then(() => {
        setScanning(false);
      });
    }
  };

  return (
    <div className="scanner-container">
      <h2>Custom QR Scanner</h2>
      <div id="qr-reader" className="qr-box"></div>
      
      <div className="button-container">
        {!scanning ? (
          <button onClick={startScanning} className="scan-btn">Start Scan</button>
        ) : (
          <button onClick={stopScanning} className="stop-btn">Stop Scan</button>
        )}
      </div>

      {result && <p className="scan-result">Scanned Result: {result}</p>}
    </div>
  );
};

export default CustomQRScanner;
