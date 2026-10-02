export type ApptStatus = 'completed' | 'upcoming' | 'cancelled';

export interface Appointment {
  id: string;
  provider: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: ApptStatus;
}

export type AppointmentFormObj = Omit<Appointment, 'id'>;
