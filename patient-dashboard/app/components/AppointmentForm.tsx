// Util Imports
import { useState, useEffect } from 'react';

// Shared Imports
import type {
  AppointmentFormObj,
  ApptStatus,
} from '../sharedPropTypes/AppointmentTypes';

// Appointment Form Props
type AppointmentFormProps = {
  appointmentToEdit: AppointmentFormObj | null;
  onSave: (appointmentObj: AppointmentFormObj) => void; // handleFormSubmit from AppointmentManager
  isModalOpen: boolean;
};

export default function AppointmentForm({
  appointmentToEdit,
  onSave,
  isModalOpen,
}: AppointmentFormProps) {
  // Form Input States
  const [provider, setProvider] = useState<string>(' ');
  const [specialty, setSpecialty] = useState<string>(' ');
  const [date, setDate] = useState<string>(' ');
  const [time, setTime] = useState<string>(' ');
  const [location, setLocation] = useState<string>(' ');
  const [status, setStatus] = useState<ApptStatus>('upcoming');

  // Effects - syncing appointmentToEdit with form fields
  useEffect(() => {
    setProvider(appointmentToEdit?.provider ?? '');
    setSpecialty(appointmentToEdit?.specialty ?? '');
    setDate(appointmentToEdit?.date ?? '');
    setTime(appointmentToEdit?.time ?? '');
    setLocation(appointmentToEdit?.location ?? '');
    setStatus(appointmentToEdit?.status ?? 'upcoming');
  }, [appointmentToEdit, isModalOpen]);

  // Event Handlers
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the page reload
    onSave({ provider, specialty, date, time, location, status }); // call your prop
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Heading */}
      <h2>Appointment Form</h2>
      <p>
        Fill out this form to {appointmentToEdit === null ? 'add' : 'edit'}{' '}
        appointment.
      </p>

      {/* Field Grouping */}
      <fieldset>
        <legend>Appointment Information</legend>

        <label>
          provider
          <input
            onChange={(e) => setProvider(e.target.value)}
            value={provider}
            type="text"
            required
          />
        </label>
        <label>
          speciality
          <input
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
            type="text"
            required
          />
        </label>
        <label>
          date
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            required
          />
        </label>
        <label>
          time
          <input
            onChange={(e) => setTime(e.target.value)}
            value={time}
            type="time"
            required
          />
        </label>
        <label>
          location
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            required
          />
        </label>
        <label>
          Select status:
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as ApptStatus)}
          >
            <option value="upcoming">upcoming</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </label>

        {/* Form Submit */}
        <input
          type="submit"
          value={appointmentToEdit === null ? 'Add' : 'Save'}
        />
      </fieldset>
    </form>
  );
}
