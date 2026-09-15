export interface Appointment {
  id: string;
  provider: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

export type AppointmentFormObj = Omit<Appointment, 'id'>;
