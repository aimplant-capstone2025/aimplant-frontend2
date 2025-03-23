import React from 'react';
import { ImplantResult } from '@/app/types';

interface ImplantResultCardProps {
  implant: ImplantResult;
}

const ImplantResultCard: React.FC<ImplantResultCardProps> = ({ implant }) => {
  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy':
        return 'text-green-600';
      case 'Mucositis':
        return 'text-amber-500';
      case 'Peri-implantitis':
        return 'text-red-600';
      default:
        return 'text-gray-700';
    }
  };

  // Get status indicator color
  const getStatusIndicatorColor = (status: string) => {
    switch (status) {
      case 'Healthy':
        return 'bg-green-500';
      case 'Mucositis':
        return 'bg-amber-500';
      case 'Peri-implantitis':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="border border-purple-200 rounded-lg overflow-hidden">
      <div className={`h-2 ${getStatusIndicatorColor(implant.status)}`}></div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <img 
            src={implant.croppedImage} 
            alt={`Implant ${implant.id}`} 
            className="w-40 h-29 object-cover rounded-md"
          />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between mb-2">
            <h4 className="font-medium">Implant ID: {implant.id}</h4>
            <span className="font-medium">{implant.position}</span>
            <span className={`font-semibold ${getStatusColor(implant.status)}`}>
              {implant.status}
            </span>
          </div>
          <h5 className="font-medium mb-1">Bone loss</h5>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between">
              <span>6m:</span>
              <span>{implant.boneLoss.sixMonths}%</span>
            </li>
            <li className="flex justify-between">
              <span>2y:</span>
              <span>{implant.boneLoss.twoYears}%</span>
            </li>
            <li className="flex justify-between">
              <span>5y:</span>
              <span>{implant.boneLoss.fiveYears}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImplantResultCard;