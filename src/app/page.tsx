'use client'
import { useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/UploadImage";
import ProcessImage from '@/components/ProcessImage';
import UploadImageNoStore from '@/components/UploadImageNoStore';

import { ImplantResult } from '@/app/types';
import Header from '@/components/Header';
import PatientForm from '@/components/PatientForm';
import ResultsPanel from '@/components/ResultsPanel';
import Sidebar from '@/components/Sidebar'

export default function Home() {
  
  // const [imageUrl, setImageUrl] = useState<string>(
  //   ''
  // )
  // const [image, setImage] = useState<string | null>(null);
  // const [processedImage, setProcessedImage] = useState<string | null>(null);

  // return (
  //   <main className='space-y-12'>
  //     <div className='text-center'>
  //       <h1 className='h1 font-bold'>AImplant</h1>
  //     </div>
  //     <h4 className='h4'>Upload an image to try yolov8-pose keypoint detection</h4>
      
  //     <div className='flex items-center mt-8 mb-8 space-x-4'>
  //       <Button variant="default" className="w-full">Implant</Button>
  //       <Button variant="purple" className="w-full">Bone loss</Button>
  //       <Button variant="green" className="w-full">Healthy</Button>
  //       <Button variant="orange" className="w-full">Mucositis</Button>
  //       <Button variant="red" className="w-full">Peri-implantitis</Button>
  //     </div>

  //     <UploadImage setImageUrl={setImageUrl} />

  //     <h3 className="h3 font-bold">Upload Image (not store)</h3>
  //       <UploadImageNoStore onImageUpload={setImage} />
  //       {image && <ProcessImage image={image} />}

  //   </main>
  // );
  const [showResults, setShowResults] = useState<boolean>(false);
  const [totalImplants, setTotalImplants] = useState<number>(0);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [implantResults, setImplantResults] = useState<ImplantResult[]>([]);

  // Handle results from form submission
  const handleResultsReady = (results: {
    totalImplants: number;
    implantResults: ImplantResult[];
    processedImageUrl: string | null;
  }) => {
    setTotalImplants(results.totalImplants);
    setImplantResults(results.implantResults);
    setProcessedImageUrl(results.processedImageUrl);
    setShowResults(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
    <main className="flex-1 p-8">
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className={`bg-white rounded-lg shadow-md p-6 ${showResults ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
            <PatientForm onResultsReady={handleResultsReady} />
          </div>
          
          {/* Results Section */}
          {showResults && (
            <ResultsPanel
              totalImplants={totalImplants}
              processedImageUrl={processedImageUrl}
              implantResults={implantResults}
            />
          )}
        </div>
      </div>
    </div>
    </main>
    </div>
  );
}
