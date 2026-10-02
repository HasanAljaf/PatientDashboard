// Util Imports
import { useState, useEffect } from 'react';

// Shared Imports
import type {
  MedicationFormObj,
  MedStatus,
} from '../sharedPropTypes/MedicationTypes';

// Medication Form Props
type MedicationFormProps = {
  medicationToEdit: MedicationFormObj | null;
  isModalOpen: boolean;
  onSave: (medicationObj: MedicationFormObj) => void; // handleFormSubmit from MedicationManager
};

export default function MedicationForm({
  medicationToEdit,
  onSave,
  isModalOpen,
}: MedicationFormProps) {
  // State Variables
  const [name, setName] = useState<string>('');
  const [dosage, setDosage] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [prescribedBy, setPrescribedBy] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [status, setStatus] = useState<MedStatus>('active');

  // Effects
  useEffect(() => {
    setName(medicationToEdit?.name ?? '');
    setDosage(medicationToEdit?.dosage ?? '');
    setFrequency(medicationToEdit?.frequency ?? '');
    setPrescribedBy(medicationToEdit?.prescribedBy ?? '');
    setStartDate(medicationToEdit?.startDate ?? '');
    setStatus(medicationToEdit?.status ?? 'active');
  }, [medicationToEdit, isModalOpen]);

  // Event Handlers
  function HandleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
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
    <form onSubmit={HandleSubmit}>
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
        <input
          type="submit"
          value={medicationToEdit === null ? 'Add' : 'Save'}
        />
      </fieldset>
    </form>
  );
}
