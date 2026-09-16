// Util Imports
import { useState, useRef, useEffect } from 'react';

// Shared Imports
import { ToggleVisibility } from '../sharedPropTypes/ToggleVisibilityTypes';
import type {
  Medication,
  MedicationFormObj,
} from '../sharedPropTypes/MedicationTypes';

// Component Imports
import Modal from './Modal';
import MedicationForm from './MedicationForm';

// Medication Manager Props
type MedicationManagerProps = ToggleVisibility & {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
};

export default function MedicationManager({
  style,
  medications,
  setMedications,
}: MedicationManagerProps) {
  // State Variables
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Ref Variables
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Variables
  const medicationToEdit = medications.find((m) => m.id === editingId) ?? null;

  // Event Handlers
  function handleFormSubmit(medicationObj: MedicationFormObj) {
    if (medicationToEdit === null) {
      // add case
      setMedications((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          ...medicationObj,
        },
      ]);
    } else {
      // edit case
      setMedications((current) =>
        current.map((m) =>
          m.id === editingId
            ? {
                ...m,
                ...medicationObj,
              }
            : m
        )
      );
    }
    handleModalClose();
  }

  function handleAddClick() {
    setEditingId(null);
    setIsModalOpen(true);
  }

  function handleEditClick(medId: string) {
    setEditingId(medId);
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setEditingId(null);
    setIsModalOpen(false);
  }

  function handleDeleteClick(medId: string) {
    setMedications((current) => current.filter((m) => m.id !== medId));
  }

  // Effects
  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isModalOpen]);

  return (
    <div style={style}>
      <h1>Medication Manager</h1>
      <table>
        {/* Title/Summary of the Table */}
        <caption>
          {medications.length > 0 ? 'Medications List' : 'No Medications'}
        </caption>

        {/* Header Section (Columns Labels) */}
        {medications.length > 0 ? (
          <thead>
            <tr>
              <th>Name</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Prescriber</th>
              <th>Start Date</th>
              <th>Status</th>
            </tr>
          </thead>
        ) : null}

        {/* Main Data Section */}
        <tbody>
          {medications.map((m) => [
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.dosage}</td>
              <td>{m.frequency}</td>
              <td>{m.prescribedBy}</td>
              <td>{m.startDate}</td>
              <td>{m.status}</td>
              <td>
                <button onClick={() => handleEditClick(m.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(m.id)}>Delete</button>
              </td>
            </tr>,
          ])}
        </tbody>
      </table>

      <button onClick={handleAddClick}>Add Medication</button>

      <Modal dialogRef={dialogRef} onClose={handleModalClose}>
        <MedicationForm
          medicationToEdit={medicationToEdit}
          isModalOpen={isModalOpen}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
}
