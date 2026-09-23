// Shared Imports
import type { LabResult } from '../sharedPropTypes/LabResultTypes';

export const initialLabResults: LabResult[] = [
  {
    id: crypto.randomUUID(),
    testName: 'Complete Blood Count (CBC)',
    date: '2026-08-12',
    result: 'Normal',
    value: '5.4 x10^9/L',
    referenceRange: '4.0-11.0 x10^9/L',
    status: 'completed',
  },
  {
    id: crypto.randomUUID(),
    testName: 'Lipid Panel',
    date: '2026-08-12',
    result: 'High Cholesterol',
    value: '215 mg/dL',
    referenceRange: '<200 mg/dL',
    status: 'completed',
  },
  {
    id: crypto.randomUUID(),
    testName: 'A1C',
    date: '2026-07-01',
    result: 'Normal',
    value: '5.2%',
    referenceRange: '<5.7%',
    status: 'completed',
  },
  {
    id: crypto.randomUUID(),
    testName: 'Vitamin D',
    date: '2026-09-10',
    result: 'Pending',
    value: null,
    referenceRange: '30-100 ng/mL',
    status: 'upcoming',
  },
];
