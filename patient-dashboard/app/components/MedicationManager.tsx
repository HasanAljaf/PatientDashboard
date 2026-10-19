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
          <div className="hidden md:block overflow-x-auto rounded-2xl bg-white shadow-md">
            <table className="w-full text-sm">
              {/* table header */}
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Dosage
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Frequency
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Prescriber
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Start Date
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    className="px-4 py-3 text-right text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {medications.map((m) => (
                  <tr
                    className="border-t border-gray-100 hover:bg-gray-50"
                    key={m.id}
                  >
                    <td className="px-4 py-3">{m.name}</td>
                    <td className="px-4 py-3">{m.dosage}</td>
                    <td className="px-4 py-3">{m.frequency}</td>
                    <td className="px-4 py-3">{m.prescribedBy}</td>
                    <td className="px-4 py-3">{m.startDate}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={m.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <Button
                          aria-label={`Edit medication for ${m.name}`}
                          onClick={() => handleEditClick(m.id)}
                          variant="secondary"
                        >
                          Edit
                        </Button>
                        <Button
                          aria-label={`Delete medication for ${m.name}`}
                          onClick={() => handleDeleteClick(m.id)}
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
