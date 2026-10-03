// Shared Imports
import type { Medication } from '../sharedPropTypes/MedicationTypes';

// Component imports
import Card from './Card';
import StatusBadge from './StatusBadge';

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
        <button onClick={() => onEdit(medication.id)}>Edit</button>
        <button onClick={() => onDelete(medication.id)}>Delete</button>
      </footer>
    </Card>
  );
}
