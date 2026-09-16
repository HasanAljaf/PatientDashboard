// Util Imports
import { useState, useEffect } from 'react';

// Shared Imports
import type { MedicationFormObj } from '../sharedPropTypes/MedicationTypes';

// Medication Form Props
type MedicationFormProps = {
  medicationToEdit: MedicationFormObj | null;
  isModalOpen: boolean;
  onSubmit: (medicationObj: MedicationFormObj) => void; // handleFormSubmit from MedicationManager
};

export default function MedicationForm({
  medicationToEdit,
  onSubmit,
  isModalOpen,
}: MedicationFormProps) {
  // State Variables
  const [name, setName] = useState<string>(' ');
  const [dosage, setDosage] = useState<string>(' ');
  const [frequency, setFrequency] = useState<string>(' ');
  const [prescribedBy, setPrescribedBy] = useState<string>(' ');
  const [startDate, setStartDate] = useState<string>(' ');
  const [status, setStatus] = useState<string>(' ');

  // Effects
  useEffect(() => {
    setName(medicationToEdit?.name ?? ' ');
    setDosage(medicationToEdit?.dosage ?? ' ');
    setFrequency(medicationToEdit?.frequency ?? ' ');
    setPrescribedBy(medicationToEdit?.prescribedBy ?? ' ');
    setStartDate(medicationToEdit?.startDate ?? ' ');
    setStatus(medicationToEdit?.status ?? ' ');
  }, [medicationToEdit, isModalOpen]);

  return (
    <form>
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
          status
          <input
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            type="text"
            required
          />
        </label>

        {/* Form Submit */}
        <label>
          <input
            type="submit"
            value={medicationToEdit === null ? 'Add' : 'Save'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmit({
                name,
                dosage,
                frequency,
                prescribedBy,
                startDate,
                status,
              });
            }}
          />
        </label>
      </fieldset>
    </form>
  );
}
