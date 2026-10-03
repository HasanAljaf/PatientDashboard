// Util Imports
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
import { initialLabResults } from '../sampleData/SampleLabResults'; // passed down to LabResults & Overview

// Shared Imports
import type { Tab } from '../sharedPropTypes/TabTypes';
import type { Patient } from '../sharedPropTypes/PatientTypes';
import type { Appointment } from '../sharedPropTypes/AppointmentTypes';
import type { Medication } from '../sharedPropTypes/MedicationTypes';

export default function PatientDashboard() {
  // State Variables
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [patient, setPatient] = useState<Patient>(samplePatient);
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [medications, setMedications] =
    useState<Medication[]>(initialMedications);

  return (
    <section>
      <div className="bg-white text-black">
        {activeTab === 'Profile' && <Profile patient={patient} />}
        {activeTab === 'Overview' && (
          <Overview
            patient={patient}
            appointments={appointments}
            medications={medications}
          />
        )}
        {activeTab === 'Appointments' && (
          <AppointmentManager
            appointments={appointments}
            setAppointments={setAppointments}
          />
        )}
        {activeTab === 'Medications' && (
          <MedicationManager
            medications={medications}
            setMedications={setMedications}
          />
        )}
        {activeTab === 'LabResults' && (
          <LabResults labResults={initialLabResults} />
        )}
      </div>
      <nav>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>
    </section>
  );
}
