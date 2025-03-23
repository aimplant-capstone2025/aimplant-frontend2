import React, { ChangeEvent, useState } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelected: (file: File, preview: string) => void;
  imagePreview: string | null;
  required?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageSelected,
  imagePreview,
  required = false,
}) => {
  // Handle image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelected(file, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
            onChange={handleImageUpload}
            className="hidden"
            required={required}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;