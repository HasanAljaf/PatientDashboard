// Shared Imports
import type { Medication } from '../sharedPropTypes/MedicationTypes';

export const initialMedications: Medication[] = [
  {
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    prescribedBy: 'Dr. Sarah Nguyen',
    startDate: '2026-03-15',
    status: 'active',
  },
  {
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    prescribedBy: 'Dr. Sarah Nguyen',
    startDate: '2026-01-10',
    status: 'active',
  },
  {
    name: 'Amoxicillin',
    dosage: '250mg',
    frequency: 'Three times daily',
    prescribedBy: 'Dr. James Whitfield',
    startDate: '2025-11-02',
    status: 'completed',
  },
];
