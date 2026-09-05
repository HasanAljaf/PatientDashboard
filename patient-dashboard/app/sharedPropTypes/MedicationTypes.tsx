type MedStatus = 'active' | 'completed' | 'discontinued';

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  status: MedStatus;
}
