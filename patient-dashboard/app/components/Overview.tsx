// Component Imports
import Card from './Card';

// Shared Imports
import type { Patient } from '../sharedPropTypes/PatientTypes';
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';
import type { Medication } from '../sharedPropTypes/MedicationTypes';

// Overview Props
type OverviewProps = {
  patient: Patient;
  appointments: Appointment[];
  medications: Medication[];
};

export default function Overview({
  patient,
  appointments,
  medications,
}: OverviewProps) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-xl font-medium">Overview</h1>
      <Card>
        <header className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-medium">
              {patient.fName} {patient.lName}
            </h2>
            <p className="text-sm text-gray-500">Profile Summary</p>
          </div>
        </header>
        <dl className="flex flex-col gap-2">
          <div className="flex justify-between gap-4 text-sm">
            <dt className="text-gray-500">Age</dt>
            <dd className="text-right">{patient.age}</dd>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <dt className="text-gray-500">Date of birth</dt>
            <dd className="text-right">{patient.dob}</dd>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <dt className="text-gray-500">Sex</dt>
            <dd className="text-right capitalize">{patient.sex}</dd>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <dt className="text-gray-500">Blood type</dt>
            <dd className="text-right">{patient.bloodType}</dd>
          </div>
        </dl>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <p className="text-2xl font-medium">{appointments.length}</p>
          <p className="text-sm text-gray-500">Appointments</p>
        </Card>
        <Card>
          <p className="text-2xl font-medium">{medications.length}</p>
          <p className="text-sm text-gray-500">Medications</p>
        </Card>
      </div>
    </section>
  );
}
