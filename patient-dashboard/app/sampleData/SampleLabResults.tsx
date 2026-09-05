// Shared Imports
import type { LabResult } from '../sharedPropTypes/LabResultTypes';

export const initialLabResults: LabResult[] = [
  {
    testName: 'Complete Blood Count (CBC)',
    date: '2026-08-12',
    result: 'Normal',
    value: '5.4 x10^9/L',
    referenceRange: '4.0-11.0 x10^9/L',
    status: 'completed',
  },
  {
    testName: 'Lipid Panel',
    date: '2026-08-12',
    result: 'High Cholesterol',
    value: '215 mg/dL',
    referenceRange: '<200 mg/dL',
    status: 'completed',
  },
  {
    testName: 'A1C',
    date: '2026-07-01',
    result: 'Normal',
    value: '5.2%',
    referenceRange: '<5.7%',
    status: 'completed',
  },
  {
    testName: 'Vitamin D',
    date: '2026-09-10',
    result: 'Pending',
    value: null,
    referenceRange: '30-100 ng/mL',
    status: 'upcoming',
  },
];
