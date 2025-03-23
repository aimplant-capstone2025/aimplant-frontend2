import React, { useState, useRef } from "react";
import { Button } from "./ui/button";

interface ProcessImageProps {
  image: string | null; // This is the image data URL
}

const ProcessImage: React.FC<ProcessImageProps> = ({ image }) => {
  const [processed, setProcessed] = useState<string | null>(null); // State to store the processed image
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const processImage = async () => {
    if (!image) return;

    // Convert the data URL to a Blob to send as FormData
    const imageBlob = await fetch(image).then(res => res.blob());
    const formData = new FormData();
    formData.append("file", imageBlob, "image.jpg");

    try {
      // Send POST request to backend API
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data)

      if (data.processed_image) {
        // Set the processed image in base64 to state
        setProcessed(data.processed_image);
      }
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <Button variant="purple" onClick={processImage} className="w-36">
        Process
      </Button>

      {processed ? (
        <>
          <h3 className="h3 font-bold w-full">Result</h3>
          {/* Display processed image in the canvas */}
          <canvas ref={canvasRef} />
          <img
            src={`data:image/jpeg;base64,${processed}`}
            alt="Processed Image"
            style={{ maxWidth: "100%", height: "auto", display: "block", marginTop: "20px" }}
          />
        </>
      ) : null}
    </div>
  );
};

export default ProcessImage;
