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
import Button from './Button';

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
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-medium">Medication Manager</h1>
        <Button onClick={handleAddClick} variant="primary">
          Add Medication
        </Button>
      </header>

      {isDataEmpty ? (
        <p className="rounded-2xl bg-white p-6 text-center text-sm text-gray-500">
          No Medications
        </p>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-500">
            Current Medications
          </p>
          {/* Mobile view: hidden at md+ */}
          <ul className="flex flex-col gap-4 md:hidden">
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
          <table className="hidden md:table">
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
                    <Button
                      aria-label={`Edit medication for ${m.name}`}
                      onClick={() => handleEditClick(m.id)}
                      variant="secondary"
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      aria-label={`Delete medication for ${m.name}`}
                      onClick={() => handleDeleteClick(m.id)}
                      variant="destructive"
                    >
                      Delete
                    </Button>
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
          onClose={handleModalClose}
        />
      </Modal>
    </div>
  );
}
