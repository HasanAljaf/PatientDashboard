// Shared Imports
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';

// Component Imports
import Card from './Card';
import StatusBadge from './StatusBadge';
import Button from './Button';

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
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font medium">{appointment.provider}</h2>
          <p className="text-small text-gray-500">{appointment.specialty}</p>
        </div>
        <StatusBadge status={appointment.status} />
      </header>
      <dl className="flex flex-col gap-2">
        <div className="flex- justify-between gap-4 text-sm">
          <dt className="text-gray-500">Date</dt>
          <dd className="text-right">{appointment.date}</dd>
        </div>
        <div className="flex- justify-between gap-4 text-sm">
          <dt className="text-gray-500">Time</dt>
          <dd className="text-right">{appointment.time}</dd>
        </div>
        <div className="flex- justify-between gap-4 text-sm">
          <dt className="text-gray-500">Location</dt>
          <dd className="text-right">{appointment.location}</dd>
        </div>
      </dl>
      <footer className="flex justify-end gap-2">
        <Button
          aria-label={`Edit appointment for ${appointment.provider}`}
          onClick={() => {
            onEdit(appointment.id);
          }}
          variant="secondary"
        >
          Edit
        </Button>
        <Button
          aria-label={`Delete appointment for ${appointment.provider}`}
          onClick={() => {
            onDelete(appointment.id);
          }}
          variant="destructive"
        >
          Delete
        </Button>
      </footer>
    </Card>
  );
}
