// Shared Imports
import type { LabResult } from '../sharedPropTypes/LabResultTypes';

export const initialLabResults: LabResult[] = [
  {
    id: 'lab-001',
    testName: 'White Blood Cell Count (CBC)',
    date: '2026-08-12',
    status: 'completed',
    value: 5.4,
    unit: 'x10^9/L',
    referenceRange: { low: 4.0, high: 11.0 },
  },
  {
    id: 'lab-002',
    testName: 'Total Cholesterol (Lipid Panel)',
    date: '2026-08-12',
    status: 'completed',
    value: 215,
    unit: 'mg/dL',
    referenceRange: { low: null, high: 200 },
  },
  {
    id: 'lab-003',
    testName: 'Hemoglobin A1C',
    date: '2026-07-01',
    status: 'completed',
    value: 5.2,
    unit: '%',
    referenceRange: { low: null, high: 5.7 },
  },
  {
    id: 'lab-004',
    testName: 'Vitamin D',
    date: '2026-09-10',
    status: 'upcoming',
    unit: 'ng/mL',
    referenceRange: { low: 30, high: 100 },
  },
];
