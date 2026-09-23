export interface LabResult {
  id: string;
  testName: string;
  date: string;
  result: string;
  value: string | null;
  referenceRange: string;
  status: string;
}
