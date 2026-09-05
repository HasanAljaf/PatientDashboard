import { useState } from 'react';

// Component Imports
import Navbar from './Navbar';
import Profile from './Profile';
import Overview from './Overview';
import AppointmentManager from './AppointmentManager';
import MedicationManager from './MedicationManager';
import LabResults from './LabResults';

// Data Imports
import { samplePatient } from '../sampleData/SamplePatient';
import { initialAppointments } from '../sampleData/SampleAppointments';
import { initialMedications } from '../sampleData/SampleMedications';
import { initialLabResults } from '../sampleData/SampleLabResults';

export default function PatientDashboard() {
  // State Variables
  const [activeTab, setActiveTab] = useState('Overview');
  const [patient, setPatient] = useState(samplePatient);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [medications, setMedications] = useState(initialMedications);

  const hideVisibility = {
    display: 'none',
  };
  return (
    <section>
      <div>
        <Profile
          patient={patient}
          style={activeTab !== 'Profile' ? hideVisibility : undefined}
        />
        <Overview
          patient={patient}
          appointments={appointments}
          medications={medications}
          style={activeTab !== 'Overview' ? hideVisibility : undefined}
        />
        <AppointmentManager
          style={activeTab !== 'Appointments' ? hideVisibility : undefined}
        />
        <MedicationManager
          style={activeTab !== 'Medications' ? hideVisibility : undefined}
        />
        <LabResults
          style={activeTab !== 'LabResults' ? hideVisibility : undefined}
        />
      </div>
      <nav>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>
    </section>
  );
}
