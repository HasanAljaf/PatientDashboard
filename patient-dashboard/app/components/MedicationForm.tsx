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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Form Heading */}
      <h2 className="text-lg font-medium">Medication Form</h2>
      <p className="text-sm text-gray-500">
        Fill out this form to {medicationToEdit === null ? 'add' : 'edit'}{' '}
        medication
      </p>

      {/* Field Grouping */}
      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">Medication Information</legend>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Name
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Dosage
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setDosage(e.target.value)}
            value={dosage}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Frequency
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Prescribed By
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setPrescribedBy(e.target.value)}
            value={prescribedBy}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Start Date
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            type="date"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Status
          <select
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as MedStatus)}
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>
      </fieldset>
      <div className="flex justify-end gap-2">
        {/* Cancel/Close Form */}
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
        {/* Form Submit */}
        <Button variant="primary" type="submit">
          {medicationToEdit === null ? 'Add' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
