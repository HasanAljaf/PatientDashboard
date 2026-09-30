// Shared Imports
import type { Patient } from '../sharedPropTypes/PatientTypes';

export const samplePatient: Patient = {
  id: 'pat_001',
  fName: 'John',
  lName: 'Doe',
  age: 24,
  sex: 'male',
  bloodType: 'AB+',
  dob: '2002-09-10',
  email: 'john_doe@gmail.com',
  phone: '802-123-4458',
  address: '67 Main Street',
  allergies: ['soy', 'gluten', 'pollen'],
  insuranceProvider: 'BlueShield Vermont',
  insuranceId: 'BSV-9938214',
};
