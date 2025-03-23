import { ImplantResult } from '@/app/types';

// Simulate API call to ML model
export const predictBoneLoss = (imageFile: File): Promise<ImplantResult[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Mock results
      const mockResults: ImplantResult[] = [
        {
          id: 1,
          position: '#45',
          status: 'Healthy',
          boneLoss: {
            sixMonths: 0,
            twoYears: 10,
            fiveYears: 15,
          },
          croppedImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200&h=150',
        },
        {
          id: 2,
          position: '#36',
          status: 'Mucositis',
          boneLoss: {
            sixMonths: 2,
            twoYears: 15,
            fiveYears: 25,
          },
          croppedImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200&h=150',
        },
        {
          id: 3,
          position: '#34',
          status: 'Peri-implantitis',
          boneLoss: {
            sixMonths: 2,
            twoYears: 15,
            fiveYears: 25,
          },
          croppedImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200&h=150',
        },
      ];
      
      resolve(mockResults);
    }, 2000);
  });
};