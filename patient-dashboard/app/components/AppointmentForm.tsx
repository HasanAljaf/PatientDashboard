// Util Imports
import { useState, useEffect } from 'react';

// Shared Imports
import type { AppointmentFormObj } from '../sharedPropTypes/AppointmentTypes';

// Appointment Form Props
type AppointmentFormProps = {
  appointmentToEdit: AppointmentFormObj | null;
  onSubmit: (appointmentObj: AppointmentFormObj) => void; // handleFormSubmit from AppointmentManager
  isModalOpen: boolean;
};

export default function AppointmentForm({
  appointmentToEdit,
  onSubmit,
  isModalOpen,
}: AppointmentFormProps) {
  // Form Input States
  const [provider, setProvider] = useState<string>(
    appointmentToEdit?.provider ?? ' '
  );
  const [specialty, setSpecialty] = useState<string>(
    appointmentToEdit?.specialty ?? ' '
  );
  const [date, setDate] = useState<string>(appointmentToEdit?.date ?? ' ');
  const [time, setTime] = useState<string>(appointmentToEdit?.time ?? ' ');
  const [location, setLocation] = useState<string>(
    appointmentToEdit?.location ?? ' '
  );
  const [status, setStatus] = useState<string>(
    appointmentToEdit?.status ?? ' '
  );

  // useEffect hook - syncing appointmentToEdit with Form fields
  useEffect(() => {
    setProvider(appointmentToEdit?.provider ?? ' ');
    setSpecialty(appointmentToEdit?.specialty ?? ' ');
    setDate(appointmentToEdit?.date ?? ' ');
    setTime(appointmentToEdit?.time ?? ' ');
    setLocation(appointmentToEdit?.location ?? ' ');
    setStatus(appointmentToEdit?.status ?? ' ');
  }, [appointmentToEdit, isModalOpen]);

  return (
    <form>
      {/* Form Heading */}
      <h2>{appointmentToEdit === null ? 'Add' : 'Edit'} Appointment Form</h2>
      <p>
        Please fill out this form to{' '}
        {appointmentToEdit === null ? 'Add' : 'Edit'} an appointment.
      </p>

      {/* Field Grouping */}
      <fieldset>
        <legend>Appointment Information</legend>

        <label>
          <input
            onChange={(e) => setProvider(e.target.value)}
            value={provider}
            type="text"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
            type="text"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => setTime(e.target.value)}
            value={time}
            type="time"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            type="text"
            required
          />
        </label>

        <label>
          <input
            type="submit"
            value={
              appointmentToEdit === null
                ? 'Add Appointment'
                : 'Save Appointment'
            }
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmit({
                provider,
                specialty,
                date,
                time,
                location,
                status,
              });
            }}
          />
        </label>
      </fieldset>
    </form>
  );
}
