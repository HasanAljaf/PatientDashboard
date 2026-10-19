// Lucide Icons Imports
import { LucideIcon } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { User } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Pill } from 'lucide-react';
import { FlaskConical } from 'lucide-react';

// Shared Imports
import type { Tab } from '../sharedPropTypes/TabTypes';

// Component Types
type TabObjects = {
  tab: Tab;
  label: string;
  icon: LucideIcon;
};

type NavbarTypes = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarTypes) {
  function handleClick(tab: Tab) {
    setActiveTab(tab);
  }

  const tabs: TabObjects[] = [
    {
      tab: 'Overview',
      label: 'Overview',
      icon: LayoutDashboard,
    },
    {
      tab: 'Profile',
      label: 'Profile',
      icon: User,
    },
    {
      tab: 'Appointments',
      label: 'Appointments',
      icon: CalendarDays,
    },
    {
      tab: 'Medications',
      label: 'Medications',
      icon: Pill,
    },
    {
      tab: 'Labs',
      label: 'Labs',
      icon: FlaskConical,
    },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-gray-200 bg-white">
      <ul className="mx-auto flex max-w-md">
        {tabs.map((t) => {
          const isActive = t.tab === activeTab;
          return (
            <li className="flex-1" key={t.tab}>
              <button
                className={`flex min-h-14 w-full cursor-pointer flex-col items-center justify-center gap-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-teal ${isActive ? 'text-brand-teal' : 'text-gray-500 hover:text-gray-900'}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleClick(t.tab)}
              >
                <t.icon className="size-6" />
                <span className="sr-only md:not-sr-only text-xs font-medium">
                  {t.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
