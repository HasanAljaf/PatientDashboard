// Component Imports
import Card from './Card';

// Shared Imports
import type { Patient } from '../sharedPropTypes/PatientTypes';

// Profile Props
type ProfileProps = {
  patient: Patient;
};

export default function Profile({ patient }: ProfileProps) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-xl font-medium">Patient Profile</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-base font-medium">Personal</h2>
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Name</dt>
              <dd className="text-right">
                {patient.fName} {patient.lName}
              </dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Age</dt>
              <dd className="text-right">{patient.age}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Sex</dt>
              <dd className="text-right capitalize">{patient.sex}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Blood type</dt>
              <dd className="text-right">{patient.bloodType}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Date of birth</dt>
              <dd className="text-right">{patient.dob}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <h2 className="text-base font-medium">Contact</h2>
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Email</dt>
              <dd className="text-right break-all">{patient.email}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Phone</dt>
              <dd className="text-right">{patient.phone}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Address</dt>
              <dd className="text-right">{patient.address}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <h2 className="text-base font-medium">Medical</h2>
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Allergies</dt>
              <dd className="text-right">
                <ul className="flex flex-wrap justify-end gap-1">
                  {patient.allergies.map((a) => (
                    <li
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium"
                      key={a}
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Insurance provider</dt>
              <dd className="text-right">{patient.insuranceProvider}</dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-gray-500">Insurance ID</dt>
              <dd className="text-right">{patient.insuranceId}</dd>
            </div>
          </dl>
        </Card>
      </div>
    </section>
  );
}
