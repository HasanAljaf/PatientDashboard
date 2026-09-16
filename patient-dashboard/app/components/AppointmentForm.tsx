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
  const [provider, setProvider] = useState<string>(' ');
  const [specialty, setSpecialty] = useState<string>(' ');
  const [date, setDate] = useState<string>(' ');
  const [time, setTime] = useState<string>(' ');
  const [location, setLocation] = useState<string>(' ');
  const [status, setStatus] = useState<string>(' ');

  // Effects - syncing appointmentToEdit with form fields
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
            value={appointmentToEdit === null ? 'Add' : 'Save'}
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
