type Sex = 'male' | 'female' | 'other';
type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Patient {
  id: string;
  fName: string;
  lName: string;
  age: number;
  sex: Sex;
  bloodType: BloodType;
  dob: string;
  email: string;
  phone: string;
  address: string;
  allergies: string[];
  insuranceProvider: string;
  insuranceId: string;
}
