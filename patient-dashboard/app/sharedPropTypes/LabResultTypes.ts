export type RefRange =
  | { low: number; high: number | null }
  | { low: number | null; high: number };

// Fields every lab result has, regardless of status
type LabResultBase = {
  id: string;
  testName: string;
  date: string;
  unit: string;
  referenceRange: RefRange;
};

// A completed test always has a measured value
type CompletedLabResult = LabResultBase & {
  status: 'completed';
  value: number;
};

// An upcoming or cancelled test has no value at all
type PendingLabResult = LabResultBase & {
  status: 'upcoming' | 'cancelled';
};

export type LabResult = CompletedLabResult | PendingLabResult;

// Derived from the union, so it can never drift out of sync
export type LabStatus = LabResult['status'];

export type RangeFlag = 'low' | 'normal' | 'high';
