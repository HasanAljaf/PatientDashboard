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

// Shared Badge Styles
const badgeBase =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';

const badgeVariant: Record<StatusTypes, string> = {
  completed: 'bg-status-neutral text-status-neutral-text',
  upcoming: 'bg-status-warning/12 text-status-warning-text',
  cancelled: 'bg-status-danger/12 text-status-danger',
  active: 'bg-status-success/12 text-status-success-text',
};

// Badge Prop Types
type StatusBadgeProps = {
  status: StatusTypes;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${badgeBase} ${badgeVariant[status]}`}>
      {getStatusLabel(status)}
    </span>
  );
}
