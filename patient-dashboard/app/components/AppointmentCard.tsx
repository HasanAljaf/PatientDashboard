// Shared Imports
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';

// Component Imports
import Card from './Card';
import StatusBadge from './StatusBadge';

// Appointment Card Props
type AppointmentCardProps = {
  appointment: Appointment;
  onEdit: (apptId: string) => void;
  onDelete: (apptId: string) => void;
};

export default function AppointmentCard({
  appointment,
  onEdit,
  onDelete,
}: AppointmentCardProps) {
  return (
    <Card>
      <header>
        <div>
          <h2>{appointment.provider}</h2>
          <p>{appointment.specialty}</p>
        </div>
        <StatusBadge status={appointment.status} />
      </header>
      <dl>
        <div>
          <dt>Date</dt>
          <dd>{appointment.date}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{appointment.time}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{appointment.location}</dd>
        </div>
      </dl>
      <footer>
        <button
          id={`Edit appointment for ${appointment.provider}`}
          onClick={() => {
            onEdit(appointment.id);
          }}
        >
          Edit
        </button>
        <button
          id={`Delete appointment for ${appointment.provider}`}
          onClick={() => {
            onDelete(appointment.id);
          }}
        >
          Delete
        </button>
      </footer>
    </Card>
  );
}
