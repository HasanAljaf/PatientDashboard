// Shared Imports
import type { LabStatus } from '../sharedPropTypes/LabResultTypes';
import type { MedStatus } from '../sharedPropTypes/MedicationTypes';
import type { ApptStatus } from '../sharedPropTypes/AppointmentTypes';

// Status Badge Types
type StatusTypes = LabStatus | MedStatus | ApptStatus;

// Status Badge Lookup Object
const statusLabel: Record<StatusTypes, string> = {
  completed: 'Completed',
  upcoming: 'Upcoming',
  cancelled: 'Cancelled',
  active: 'Active',
};

function getStatusLabel(status: StatusTypes): string {
  return statusLabel[status];
}

// Badge Prop Types
type StatusBadgeProps = {
  status: StatusTypes;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span>{getStatusLabel(status)}</span>;
}
