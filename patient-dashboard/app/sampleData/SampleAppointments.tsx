// Shared Imports
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';

export const initialAppointments: Appointment[] = [
  {
    id: crypto.randomUUID(),
    provider: 'Dr. Sarah Nguyen',
    specialty: 'Primary Care',
    date: '2026-09-18',
    time: '10:30',
    location: 'Burlington Family Health, Suite 204',
    status: 'upcoming',
  },
  {
    id: crypto.randomUUID(),
    provider: 'Dr. James Whitfield',
    specialty: 'Cardiology',
    date: '2026-07-22',
    time: '14:00',
    location: 'UVM Medical Center, Cardiology Dept',
    status: 'completed',
  },
  {
    id: crypto.randomUUID(),
    provider: 'Dr. Amara Osei',
    specialty: 'Dermatology',
    date: '2026-06-05',
    time: '09:15',
    location: 'Champlain Dermatology Associates',
    status: 'cancelled',
  },
];
