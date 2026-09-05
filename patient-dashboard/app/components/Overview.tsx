// Shared Imports
import { ToggleVisibility } from '../sharedPropTypes/ToggleVisibilityTypes';
import type { Patient } from '../sharedPropTypes/PatientTypes';
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';
import type { Medication } from '../sharedPropTypes/MedicationTypes';

// Overview Props
type OverviewProps = ToggleVisibility & {
  patient: Patient;
  appointments: Appointment[];
  medications: Medication[];
};

export default function Overview({
  style,
  patient,
  appointments,
  medications,
}: OverviewProps) {
  return (
    <section style={style}>
      <h1>Overview</h1>
      <div>
        <h2>Profile Summary</h2>
        <h3>
          {patient.fName} {patient.lName}
        </h3>
        <p>Age: {patient.age}</p>
        <p>dob: {patient.dob}</p>
        <p>Sex: {patient.sex}</p>
        <p>Blood Type: {patient.bloodType}</p>
        <div>
          <p>Appointments: {appointments.length}</p>
          <p>Medications: {medications.length}</p>
        </div>
      </div>
    </section>
  );
}
