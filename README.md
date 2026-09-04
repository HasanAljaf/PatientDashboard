# Patient Portal

A responsive patient dashboard built with Next.js, React, and TypeScript — built as a semester project for Advanced Web Technology, and designed to grow into a full-stack portfolio project afterward.

## About

Patient Portal is a mobile-first healthcare dashboard where a patient can view and manage their appointments, medications, lab results, and profile information. All data in this version is local component state, seeded with fictional sample data — no real patient information is used.

This project started as a class assignment and is intentionally scoped small for the semester. A future version will add a backend (Node/Express or similar), a PostgreSQL database, authentication, and deployment.

## Features

- **Overview** — summary of upcoming appointments, active medications, and key patient info
- **Appointments** — add, edit, and delete appointments
- **Medications** — add, edit, and delete medications
- **Lab results** — view fictional sample lab results
- **Profile** — view patient information
- Fully responsive, mobile-first layout with a fixed bottom navigation bar

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/) — `useState`, `useEffect`
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
├── page.tsx                  # Entry point, renders PatientDashboard
└── components/
    ├── PatientDashboard.tsx  # Owns activeTab, patient, appointments, medications state
    ├── NavBar.tsx            # Bottom nav bar, tab switching
    ├── Profile.tsx           # Read-only patient info
    ├── Overview.tsx          # Summary of appointments, medications, patient info
    ├── AppointmentManager.tsx
    ├── MedicationManager.tsx
    ├── LabResults.tsx
    ├── Modal.tsx              # Reusable modal wrapper
    ├── AppointmentForm.tsx    # Add/edit appointment form (used inside Modal)
    └── MedicationForm.tsx     # Add/edit medication form (used inside Modal)
```

See `DESIGN.md` for color, typography, and spacing conventions used throughout the project.

## Roadmap

Planned for a future, post-semester version of this project:

- [ ] Backend API
- [ ] PostgreSQL database
- [ ] Authentication
- [ ] Multi-patient support
- [ ] Editable patient profile
- [ ] Provider-facing views
- [ ] Deployment

## Disclaimer

This project is for educational and portfolio purposes only. All patient data is fictional. This application is not intended for use with real patient health information and is not HIPAA-compliant.

## License

MIT
