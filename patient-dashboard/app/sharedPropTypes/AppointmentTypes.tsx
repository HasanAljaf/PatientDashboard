type AppointmentStatus = 'completed' | 'upcoming' | 'cancelled';

export interface Appointment {
  provider: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: AppointmentStatus;
}
