import React from 'react';
import { ImplantResult } from '../app/types';
import ImplantResultCard from './ImplantResultCard';

interface ResultsPanelProps {
  totalImplants: number;
  processedImageUrl: string | null;
  implantResults: ImplantResult[];
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({
  totalImplants,
  processedImageUrl,
  implantResults,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-purple-900 mb-4">
        Total implants: {totalImplants}
      </h3>
      
      {/* Processed Image */}
      {processedImageUrl && (
        <div className="mb-6">
          <img 
            src={processedImageUrl} 
            alt="Processed X-ray with detected implants" 
            className="w-full rounded-lg border border-purple-200"
          />
        </div>
      )}
      
      {/* Implant Results */}
      <div className="space-y-4">
        {implantResults.map((implant) => (
          <ImplantResultCard key={implant.id} implant={implant} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPanel;