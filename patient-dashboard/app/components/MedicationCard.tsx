// Shared Imports
import type { Medication } from '../sharedPropTypes/MedicationTypes';

// Component imports
import Card from './Card';
import StatusBadge from './StatusBadge';
import Button from './Button';

// Medication Card Props
type MedicationCardProps = {
  medication: Medication;
  onEdit: (medId: string) => void;
  onDelete: (medId: string) => void;
};

export default function MedicationCard({
  medication,
  onEdit,
  onDelete,
}: MedicationCardProps) {
  return (
    <Card>
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-medium">{medication.name}</h2>
          <p className="text-sm text-gray-500">
            {medication.dosage} • {medication.frequency}
          </p>
        </div>
        <StatusBadge status={medication.status} />
      </header>
      <dl className="flex flex-col gap-2">
        <div className="flex justify-between gap-4 text-sm">
          <dt className="text-gray-500">Prescribed by</dt>
          <dd className="text-right">{medication.prescribedBy}</dd>
        </div>
        <div className="flex justify-between gap-4 text-sm">
          <dt className="text-gray-500">Start date</dt>
          <dd className="text-right">{medication.startDate}</dd>
        </div>
      </dl>
      <footer className="flex justify-end gap-2">
        <Button
          aria-label={`Edit medication for ${medication.name}`}
          onClick={() => onEdit(medication.id)}
          variant="secondary"
        >
          Edit
        </Button>
        <Button
          aria-label={`Delete medication for ${medication.name}`}
          onClick={() => onDelete(medication.id)}
          variant="destructive"
        >
          Delete
        </Button>
      </footer>
    </Card>
  );
}
