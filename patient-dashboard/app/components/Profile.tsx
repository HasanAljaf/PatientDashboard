// Shared Imports
import type { Patient } from '../sharedPropTypes/PatientTypes';

// Profile Props
type ProfileProps = {
  patient: Patient;
};

export default function Profile({ patient }: ProfileProps) {
  return (
    <section>
      <h1>Patient Profile</h1>
      <div>
        <h2>
          {patient.fName} {patient.lName}
        </h2>
        <p>Age: {patient.age}</p>
        <p>Sex: {patient.sex}</p>
        <p>Blood Type: {patient.bloodType}</p>
        <p>dob: {patient.dob}</p>
        <p>Email: {patient.email}</p>
        <p>Phone: {patient.phone}</p>
        <p>Address: {patient.address}</p>
        <div>
          Allergies:{' '}
          <ul>
            {patient.allergies.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <p>Insurance Provider: {patient.insuranceProvider}</p>
        <p>Insurance ID: {patient.insuranceId}</p>
      </div>
    </section>
  );
}
