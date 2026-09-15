// Util Imports
import { useState, useRef, useEffect } from 'react';

// Shared Imports
import { ToggleVisibility } from '../sharedPropTypes/ToggleVisibilityTypes';
import type {
  Appointment,
  AppointmentFormObj,
} from '../sharedPropTypes/AppointmentTypes';

// Component Imports
import AppointmentForm from './AppointmentForm';
import Modal from './Modal';

// Appointment Manager Props
type AppointmentManagerProps = ToggleVisibility & {
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
};

export default function AppointmentManager({
  style,
  appointments,
  setAppointments,
}: AppointmentManagerProps) {
  // State Variables
  const [editingId, setEditingId] = useState<string | null>(null);
  const appointmentToEdit =
    appointments.find((a) => a.id === editingId) ?? null;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Ref Variables
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Event Handlers
  // receive data from form
  function handleFormSubmit(appointmentObj: AppointmentFormObj) {
    if (appointmentToEdit === null) {
      // Add case
      setAppointments((a) => [
        ...a,
        {
          id: crypto.randomUUID(),
          ...appointmentObj,
        },
      ]);
    } else {
      // Edit case
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
    // open modal
    setIsModalOpen(true);
  }

  function handleEditClick(apptId: string) {
    setEditingId(apptId);
    // open modal
    setIsModalOpen(true);
  }

  // handed down to Modal as onClick
  function handleModalClose() {
    setEditingId(null);
    // close modal
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
    <div style={style}>
      <h1>Appointment Manager</h1>
      <table>
        {/* Title/Summary of the Table */}
        <caption>Patient&apos;s Current Appointments</caption>

        {/* Header Section (Columns Labels) */}
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

        {/* Main Data Section */}
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.provider}</td>
              <td>{a.specialty}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.location}</td>
              <td>{a.status}</td>
              <td>
                <button onClick={() => handleEditClick(a.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddClick}>Add Appointment</button>
      <Modal dialogRef={dialogRef} onClose={handleModalClose}>
        <AppointmentForm
          appointmentToEdit={appointmentToEdit}
          onSubmit={handleFormSubmit}
          isModalOpen={isModalOpen}
        />
      </Modal>
    </div>
  );
}
