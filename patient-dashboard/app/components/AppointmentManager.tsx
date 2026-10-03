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
    <div>
      <header>
        <h1>Appointment Manager</h1>
        <button onClick={handleAddClick}>Add Appointment</button>
      </header>

      {isDataEmpty ? (
        <p>No Appointments</p>
      ) : (
        <>
          <p>Current Appointments</p>
          {/* Mobile view: hidden at md+ */}
          <ul>
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
          <table>
            {/* table header */}
            <thead>
              <tr>
                <th>Provider</th>
                <th>Specialty</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.provider}</td>
                  <td>{a.specialty}</td>
                  <td>{a.date}</td>
                  <td>{a.time}</td>
                  <td>{a.location}</td>
                  <td>
                    <StatusBadge status={a.status} />
                  </td>
                  <td>
                    <button onClick={() => handleEditClick(a.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteClick(a.id)}>
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
        <AppointmentForm
          appointmentToEdit={appointmentToEdit}
          onSave={handleFormSubmit}
          isModalOpen={isModalOpen}
        />
      </Modal>
    </div>
  );
}
