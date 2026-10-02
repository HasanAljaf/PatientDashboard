export type MedStatus = 'active' | 'completed' | 'cancelled';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  status: MedStatus;
}

export type MedicationFormObj = Omit<Medication, 'id'>;
