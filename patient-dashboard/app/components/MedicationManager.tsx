// Util Imports
import { useState, useRef, useEffect } from 'react';

// Shared Imports
import type {
  Medication,
  MedicationFormObj,
} from '../sharedPropTypes/MedicationTypes';

// Component Imports
import Modal from './Modal';
import MedicationForm from './MedicationForm';
import MedicationCard from './MedicationCard';
import StatusBadge from './StatusBadge';

// Medication Manager Props
type MedicationManagerProps = {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
};

export default function MedicationManager({
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
  const isDataEmpty = medications.length === 0;

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
    <div>
      <header>
        <h1>Medication Manager</h1>
        <button onClick={handleAddClick}>Add Medication</button>
      </header>

      {isDataEmpty ? (
        <p>No Medications</p>
      ) : (
        <>
          <p>Current Medications</p>
          {/* Mobile view: hidden at md+ */}
          <ul>
            {medications.map((m) => (
              <li key={m.id}>
                <MedicationCard
                  medication={m}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                />
              </li>
            ))}
          </ul>

          {/* Desktop view: hidden below md */}
          <table>
            {/* table header */}
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
            {/* table body */}
            <tbody>
              {medications.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.dosage}</td>
                  <td>{m.frequency}</td>
                  <td>{m.prescribedBy}</td>
                  <td>{m.startDate}</td>
                  <td>
                    <StatusBadge status={m.status} />
                  </td>
                  <td>
                    <button onClick={() => handleEditClick(m.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteClick(m.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <Modal dialogRef={dialogRef} onClose={handleModalClose}>
        <MedicationForm
          medicationToEdit={medicationToEdit}
          isModalOpen={isModalOpen}
          onSave={handleFormSubmit}
        />
      </Modal>
    </div>
  );
}
