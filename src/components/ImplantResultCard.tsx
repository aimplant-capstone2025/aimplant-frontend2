import React from 'react';
import { ImplantResult } from '@/app/types';

interface ImplantResultCardProps {
  implant: ImplantResult;
}

const ImplantResultCard: React.FC<ImplantResultCardProps> = ({ implant }) => {
  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy (no BL)':
        return 'text-green-600';
      case 'Level 1 (< 15%)':
        return 'text-yellow-500';
      case 'Level 2 (15% - 25%)':
        return 'text-orange-500';
      case 'Level 3 (25% - 50%)':
        return 'text-orange-700';
      case 'Level 4 (> 50%)':
        return 'text-red-700';
    }
  };

  // Get status indicator color
  const getStatusIndicatorColor = (status: string) => {
    switch (status) {
      case 'Healthy (no BL)':
        return 'bg-green-500';
      case 'Level 1 (< 15%)':
        return 'bg-yellow-400';
      case 'Level 2 (15% - 25%)':
        return 'bg-orange-400';
      case 'Level 3 (25% - 50%)':
        return 'bg-orange-600';
      case 'Level 4 (> 50%)':
        return 'bg-red-600';
    }
  };

  return (
    <div className="border border-purple-200 rounded-lg overflow-hidden">
      <div className={`h-1.5 ${getStatusIndicatorColor(implant.status)}`}></div>
      <div className="p-3 grid grid-cols-3 gap-3"> 
        {/* change layout to horizontal?????? */}
        <div className="col-span-1 aspect-square">
          <img 
            src={implant.croppedImage} 
            alt={`Implant ${implant.id}`} 
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between mb-1.5">
            <h4 className="font-medium">Implant ID: {implant.id}</h4>
            {/* <span className="font-medium">{implant.position}</span> */}
            {/* <span className={`font-semibold ${getStatusColor(implant.status)}`}>
              <p className="text-sm whitespace-pre-line">{implant.status}</p>
            </span> */}
          </div>
          <h5 className="font-medium mb-1">Analysis</h5>
          <ul className="space-y-1">
            {/* <li className="flex justify-between">
              <span>% bone loss:</span>
              <span>{implant.boneLoss.boneloss}%</span>
            </li> */}
            <li className="flex justify-between">
              <span>severity level:</span>
              <span className={`font-semibold ${getStatusColor(implant.status)}`}>
              {/* <p className="text-sm whitespace-pre-line">{implant.status}</p> */}
              {implant.status}
            </span>
            </li>
            <li className="flex justify-between">
              <span>% bone loss:</span>
              <span>{implant.boneLoss.boneloss}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default ImplantResultCard;