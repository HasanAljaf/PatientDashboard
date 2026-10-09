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
      <header>
        <div>
          <h2>{medication.name}</h2>
          <p>
            {medication.dosage} • {medication.frequency}
          </p>
        </div>
        <StatusBadge status={medication.status} />
      </header>
      <dl>
        <div>
          <dt>Prescribed by</dt>
          <dd>{medication.prescribedBy}</dd>
        </div>
        <div>
          <dt>Start date</dt>
          <dd>{medication.startDate}</dd>
        </div>
      </dl>
      <footer>
        <Button onClick={() => onEdit(medication.id)} variant="secondary">
          Edit
        </Button>
        <Button onClick={() => onDelete(medication.id)} variant="destructive">
          Delete
        </Button>
      </footer>
    </Card>
  );
}
