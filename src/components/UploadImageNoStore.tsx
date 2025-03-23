import React, {ChangeEvent, useState } from "react";
import { Upload } from 'lucide-react';
import { Button } from "./ui/button";
type ImageUploadProps = {
  onImageSelected: (file: File, preview: string) => void;
  imagePreview: string | null;
  required?: boolean;
};

const UploadImageNoStore: React.FC<ImageUploadProps> = ({ 
  onImageSelected,
  imagePreview,
required = false
 }) => {
  // const [preview, setPreview] = useState<string | null>(null);
  //const [fileName, setFileName] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]||null;
    if (file) {
      // setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          // setPreview(e.target.result as string);
          onImageSelected(file,e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
  //   <div className='space-y-6'>
  //     <input type="file" id='file-upload' accept="image/*" onChange={handleImageChange} style={{ display: "none" }}/>
  //     <div className='flex flex-row space-x-6'>
  //       <label htmlFor="file-upload" style={buttonStyle}>
  //         Choose File
  //       </label>
  //       {fileName && <div style={{ marginTop: "10px" }}>{fileName}</div>}
  //     </div>
  //     {preview && <img src={preview} alt="Preview" style={{ maxWidth: "100%" }} />}
  //   </div>
   <div className="mb-6">
        <label className="block text-purple-800 font-medium mb-2">
          Panoramic X-ray Image
        </label>
        <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
          {imagePreview ? (
            <div className="mb-4">
              <img 
                src={imagePreview} 
                alt="X-ray preview" 
                className="max-h-64 mx-auto"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <Upload className="w-12 h-12 text-purple-600 mb-2" />
              <p className="text-purple-700 mb-1">Upload a panoramic X-ray image</p>
              <p className="text-purple-500 text-sm">(max 5MB)</p>
            </div>
          )}
          
          <label className="mt-4 inline-block px-6 py-2 bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-md cursor-pointer transition">
            Browse
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              required={required}
            />
          </label>
        </div>
      </div>
  
  );
};

// Custom button styles
// const buttonStyle: React.CSSProperties = {
//   display: "inline-block",
//   padding: "10px 20px",
//   backgroundColor: "#DEE8FF", 
//   color: '#5A8CFF',
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   textAlign: "center",
//   fontSize: "16px",
// };


export default UploadImageNoStore;
