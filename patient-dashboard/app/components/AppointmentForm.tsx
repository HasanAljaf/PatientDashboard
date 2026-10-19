// Util Imports
import { useState } from 'react';

// Shared Imports
import type {
  AppointmentFormObj,
  ApptStatus,
} from '../sharedPropTypes/AppointmentTypes';

// Component Imports
import Button from './Button';

// Appointment Form Props
type AppointmentFormProps = {
  appointmentToEdit: AppointmentFormObj | null;
  onSave: (appointmentObj: AppointmentFormObj) => void; // handleFormSubmit from AppointmentManager

  onClose: () => void;
};

export default function AppointmentForm({
  appointmentToEdit,
  onSave,

  onClose,
}: AppointmentFormProps) {
  // Form Input States
  const [provider, setProvider] = useState<string>(
    appointmentToEdit?.provider ?? ''
  );
  const [specialty, setSpecialty] = useState<string>(
    appointmentToEdit?.specialty ?? ''
  );
  const [date, setDate] = useState<string>(appointmentToEdit?.date ?? '');
  const [time, setTime] = useState<string>(appointmentToEdit?.time ?? '');
  const [location, setLocation] = useState<string>(
    appointmentToEdit?.location ?? ''
  );
  const [status, setStatus] = useState<ApptStatus>(
    appointmentToEdit?.status ?? 'upcoming'
  );

  // Event Handlers
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the page reload
    onSave({ provider, specialty, date, time, location, status }); // call your prop
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Form Heading */}
      <h2 className="text-lg font-medium">Appointment Form</h2>
      <p className="text-sm text-gray-500">
        Fill out this form to {appointmentToEdit === null ? 'add' : 'edit'}{' '}
        appointment.
      </p>

      {/* Field Grouping */}
      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">Appointment Information</legend>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Provider
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setProvider(e.target.value)}
            value={provider}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Specialty
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Date
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Time
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            type="time"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Location
          <input
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Status
          <select
            className="min-h-11 rounded-lg border border-gray-300 bg-white px-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as ApptStatus)}
          >
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>
      </fieldset>
      <div className="flex justify-end gap-2">
        {/* Cancel/Close Form */}
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
        {/* Form Submit */}
        <Button variant="primary" type="submit">
          {appointmentToEdit === null ? 'Add' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
