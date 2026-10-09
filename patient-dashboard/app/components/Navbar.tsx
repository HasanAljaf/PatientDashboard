// Component Imports
import Button from './Button';

// Shared Imports
import type { Tab } from '../sharedPropTypes/TabTypes';

type NavbarTypes = {
  activeTab: string;
  setActiveTab: (tab: Tab) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarTypes) {
  function handleClick(tab: Tab) {
    setActiveTab(tab);
  }

  return (
    <ul>
      <li>
        <Button onClick={() => handleClick('Overview')} variant="primary">
          Overview
        </Button>
      </li>
      <li>
        <Button onClick={() => handleClick('Profile')} variant="primary">
          Profile
        </Button>
      </li>
      <li>
        <Button onClick={() => handleClick('Appointments')} variant="primary">
          Appointments
        </Button>
      </li>
      <li>
        <Button onClick={() => handleClick('Medications')} variant="primary">
          Medications
        </Button>
      </li>
      <li>
        <Button onClick={() => handleClick('LabResults')} variant="primary">
          LabResults
        </Button>
      </li>
    </ul>
  );
}
