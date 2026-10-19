// Util Imports
import { useState } from 'react';

// Shared Imports
import type {
  MedicationFormObj,
  MedStatus,
} from '../sharedPropTypes/MedicationTypes';

// Component Imports
import Button from './Button';

// Medication Form Props
type MedicationFormProps = {
  medicationToEdit: MedicationFormObj | null;
  onSave: (medicationObj: MedicationFormObj) => void; // handleFormSubmit from MedicationManager
  onClose: () => void;
};

export default function MedicationForm({
  medicationToEdit,
  onSave,

  onClose,
}: MedicationFormProps) {
  // State Variables
  const [name, setName] = useState<string>(medicationToEdit?.name ?? '');
  const [dosage, setDosage] = useState<string>(medicationToEdit?.dosage ?? '');
  const [frequency, setFrequency] = useState<string>(
    medicationToEdit?.frequency ?? ''
  );
  const [prescribedBy, setPrescribedBy] = useState<string>(
    medicationToEdit?.prescribedBy ?? ''
  );
  const [startDate, setStartDate] = useState<string>(
    medicationToEdit?.startDate ?? ''
  );
  const [status, setStatus] = useState<MedStatus>(
    medicationToEdit?.status ?? 'active'
  );

  // Event Handlers
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSave({
      name,
      dosage,
      frequency,
      prescribedBy,
      startDate,
      status,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Heading */}
      <h2>Medication Form</h2>
      <p>
        Fill out this form to {medicationToEdit === null ? 'add' : 'edit'}{' '}
        medication
      </p>

      {/* Field Grouping */}
      <fieldset>
        <legend>Medication Information</legend>

        <label>
          name
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
          />
        </label>
        <label>
          dosage
          <input
            onChange={(e) => setDosage(e.target.value)}
            value={dosage}
            type="text"
            required
          />
        </label>
        <label>
          frequency
          <input
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
            type="text"
            required
          />
        </label>
        <label>
          prescriber
          <input
            onChange={(e) => setPrescribedBy(e.target.value)}
            value={prescribedBy}
            type="text"
            required
          />
        </label>
        <label>
          start date
          <input
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            type="date"
            required
          />
        </label>
        <label>
          Select status
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as MedStatus)}
          >
            <option value="active">active</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </label>

        {/* Form Submit */}
        <Button variant="primary" type="submit">
          {medicationToEdit === null ? 'Add' : 'Save'}
        </Button>

        {/* Cancel/Close Form */}
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
      </fieldset>
    </form>
  );
}
