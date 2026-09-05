type tab =
  | 'Overview'
  | 'Profile'
  | 'Appointments'
  | 'Medications'
  | 'LabResults';

type NavbarTypes = {
  activeTab: string;
  setActiveTab: (tab: tab) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarTypes) {
  function handleClick(tab: tab) {
    setActiveTab(tab);
  }

  return (
    <ul>
      <li>
        <button onClick={() => handleClick('Overview')}>Overview</button>
      </li>
      <li>
        <button onClick={() => handleClick('Profile')}>Profile</button>
      </li>
      <li>
        <button onClick={() => handleClick('Appointments')}>
          Appointments
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('Medications')}>Medications</button>
      </li>
      <li>
        <button onClick={() => handleClick('LabResults')}>LabResults</button>
      </li>
    </ul>
  );
}
