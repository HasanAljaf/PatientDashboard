// Util Imports
import { useState, useRef, useEffect } from 'react';

// Shared Imports
import type {
  Appointment,
  AppointmentFormObj,
} from '../sharedPropTypes/AppointmentTypes';

// Component Imports
import AppointmentForm from './AppointmentForm';
import Modal from './Modal';
import AppointmentCard from './AppointmentCard';
import StatusBadge from './StatusBadge';
import Button from './Button';

// Appointment Manager Props
type AppointmentManagerProps = {
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
};

export default function AppointmentManager({
  appointments,
  setAppointments,
}: AppointmentManagerProps) {
  // State Variables
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Ref Variables
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Variables
  const appointmentToEdit =
    appointments.find((a) => a.id === editingId) ?? null;

  const isDataEmpty = appointments.length === 0;

  // Event Handlers
  function handleFormSubmit(appointmentObj: AppointmentFormObj) {
    if (appointmentToEdit === null) {
      // add case
      setAppointments((a) => [
        ...a,
        {
          id: crypto.randomUUID(),
          ...appointmentObj,
        },
      ]);
    } else {
      // edit case
      setAppointments((current) =>
        current.map((a) =>
          a.id === editingId
            ? {
                ...a,
                ...appointmentObj,
              }
            : a
        )
      );
    }
    handleModalClose();
  }

  function handleAddClick() {
    setEditingId(null);
    setIsModalOpen(true);
  }

  function handleEditClick(apptId: string) {
    setEditingId(apptId);
    setIsModalOpen(true);
  }

  // handed down to Modal as onClose
  function handleModalClose() {
    setEditingId(null);
    setIsModalOpen(false);
  }

  function handleDeleteClick(apptId: string) {
    setAppointments((current) => current.filter((a) => a.id !== apptId));
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
        <h1 className="text-xl font-medium">Appointment Manager</h1>
        <Button onClick={handleAddClick} variant="primary">
          Add Appointment
        </Button>
      </header>

      {isDataEmpty ? (
        <p className="rounded-2xl bg-white p-6 text-center text-sm text-gray-500">
          No Appointments
        </p>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-500">
            Current Appointments
          </p>
          {/* Mobile view: hidden at md+ */}
          <ul className="flex flex-col gap-4 md:hidden">
            {appointments.map((a) => (
              <li key={a.id}>
                <AppointmentCard
                  appointment={a}
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
                    Provider
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Specialty
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Date
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Time
                  </th>
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500"
                    scope="col"
                  >
                    Location
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
                {appointments.map((a) => (
                  <tr
                    className="border-t border-gray-100 hover:bg-gray-50"
                    key={a.id}
                  >
                    <td className="px-4 py-3">{a.provider}</td>
                    <td className="px-4 py-3">{a.specialty}</td>
                    <td className="px-4 py-3">{a.date}</td>
                    <td className="px-4 py-3">{a.time}</td>
                    <td className="px-4 py-3">{a.location}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={a.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <Button
                          aria-label={`Edit appointment for ${a.provider}`}
                          onClick={() => handleEditClick(a.id)}
                          variant="secondary"
                        >
                          Edit
                        </Button>
                        <Button
                          aria-label={`Delete appointment for ${a.provider}`}
                          onClick={() => handleDeleteClick(a.id)}
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
        <AppointmentForm
          appointmentToEdit={appointmentToEdit}
          onSave={handleFormSubmit}
          isModalOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </Modal>
    </div>
  );
}
