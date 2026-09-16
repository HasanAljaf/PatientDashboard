export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  status: string;
}

export type MedicationFormObj = Omit<Medication, 'id'>;
