import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useState } from "react";

const Scaner = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [qrMessage, setQrMessage] = useState("");

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 200, height: 200 } };
    const html5QrCode = new Html5Qrcode("qrCodeContainer");

    const qrScanerStop = () => {
      if (html5QrCode.isScanning) {
        html5QrCode
          .stop()
          .then(() => console.log("Scanner stopped"))
          .catch((err) => console.log("Scanner error:", err));
      }
    };

    const qrCodeSuccess = (decodedText) => {
      setQrMessage(decodedText);
      setEnabled(false);
    };

    if (isEnabled) {
      html5QrCode
        .start({ facingMode: "environment" }, config, qrCodeSuccess)
        .catch((err) => console.log("Scanner start error:", err));
      setQrMessage("");
    } else {
      qrScanerStop();
    }

    return () => qrScanerStop();
  }, [isEnabled]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-[400px]">
      <div id="qrCodeContainer" className="w-64 h-64 bg-white rounded shadow-lg"></div>
      {qrMessage && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
          {qrMessage}
        </div>
      )}
      <button
        onClick={() => setEnabled(!isEnabled)}
        className={`mt-4 px-4 py-2 rounded text-white ${isEnabled ? 'bg-red-500' : 'bg-green-500'} focus:outline-none`}
      >
        {isEnabled ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Scaner;
