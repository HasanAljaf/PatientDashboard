// Shared Imports
import type { Medication } from '../sharedPropTypes/MedicationTypes';

export const initialMedications: Medication[] = [
  {
    id: crypto.randomUUID(),
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    prescribedBy: 'Dr. Sarah Nguyen',
    startDate: '2026-03-15',
    status: 'active',
  },
  {
    id: crypto.randomUUID(),
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    prescribedBy: 'Dr. Sarah Nguyen',
    startDate: '2026-01-10',
    status: 'active',
  },
  {
    id: crypto.randomUUID(),
    name: 'Amoxicillin',
    dosage: '250mg',
    frequency: 'Three times daily',
    prescribedBy: 'Dr. James Whitfield',
    startDate: '2025-11-02',
    status: 'completed',
  },
];
