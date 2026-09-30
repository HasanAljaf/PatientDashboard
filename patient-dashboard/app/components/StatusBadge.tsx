// Shared Imports
import type { LabStatus } from '../sharedPropTypes/LabResultTypes';

// Status Badge Lookup Object
const statusLabel: Record<LabStatus, string> = {
  completed: 'Completed',
  upcoming: 'Upcoming',
  cancelled: 'Cancelled',
};

function getStatusLabel(status: LabStatus): string {
  return statusLabel[status];
}

// Badge Prop Types
type StatusBadgeProps = {
  status: LabStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span>{getStatusLabel(status)}</span>;
}
