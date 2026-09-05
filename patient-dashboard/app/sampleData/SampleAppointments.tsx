// Shared Imports
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';

export const initialAppointments: Appointment[] = [
  {
    provider: 'Dr. Sarah Nguyen',
    specialty: 'Primary Care',
    date: '2026-09-18',
    time: '10:30 AM',
    location: 'Burlington Family Health, Suite 204',
    status: 'upcoming',
  },
  {
    provider: 'Dr. James Whitfield',
    specialty: 'Cardiology',
    date: '2026-07-22',
    time: '2:00 PM',
    location: 'UVM Medical Center, Cardiology Dept',
    status: 'completed',
  },
  {
    provider: 'Dr. Amara Osei',
    specialty: 'Dermatology',
    date: '2026-06-05',
    time: '9:15 AM',
    location: 'Champlain Dermatology Associates',
    status: 'cancelled',
  },
];
