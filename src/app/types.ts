// Types for our application
export type Gender = 'male' | 'female' | 'other';
export type ImplantLocation = string;
export type PatientData = {
  age: string;
  gender: Gender;
  location: ImplantLocation;
  image: File | null;
};

export type ImplantResult = {
  id: number;
  position: string;
  status: 'Healthy' | 'Mucositis' | 'Peri-implantitis';
  boneLoss: {
    sixMonths: number;
    twoYears: number;
    fiveYears: number;
  };
  croppedImage: string; // URL or base64
};