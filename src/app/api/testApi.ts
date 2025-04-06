import { ImplantResult } from '@/app/types';

export const predictBoneLossAPI = async (imageFile: File): Promise<{ result_img: string; implants: ImplantResult[] }> => {
  const formData = new FormData();
  formData.append('file', imageFile);

  try {
    const response = await fetch('http://localhost:8000/predict/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to get prediction from server');
    }

    const data = await response.json();

    // Convert FastAPI response to ImplantResult[] format
    const implants: ImplantResult[] = data.implants.map((implant: any, index: number) => ({
      id: index + 1,
      position: `#${30 + index}`, // Placeholder positions; replace with real logic if available
      status: 'Mucositis',
    //   status: implant.class,      // "Peri-implantitis", etc.
      boneLoss: {
        // sixMonths: 0,             // If you have this from backend, replace it
        // // twoYears: Math.round(implant.boneloss), // Use boneloss from backend
        // // fiveYears: Math.round(implant.boneloss + 10), // Fake projection for demo
        // twoYears: 15, // Use boneloss from backend
        // fiveYears: 20,
        boneloss: Math.round(implant.boneloss),
        // boneloss: 20,
      },
      croppedImage: `data:image/jpeg;base64,${implant.img}`, // Use base64 image
    }));
    const result_img = `data:image/jpeg;base64,${data.result_img}`;

    return {
      result_img: `data:image/jpeg;base64,${data.result_img}`,
        implants,
      };

  } catch (error) {
    console.error('Prediction error:', error);
    throw error;
  }
};
