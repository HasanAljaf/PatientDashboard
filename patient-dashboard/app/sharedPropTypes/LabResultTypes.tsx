type LabStatus = 'completed' | 'upcoming' | 'cancelled';

export interface LabResult {
  testName: string;
  date: string;
  result: string;
  value: string | null;
  referenceRange: string;
  status: LabStatus;
}
