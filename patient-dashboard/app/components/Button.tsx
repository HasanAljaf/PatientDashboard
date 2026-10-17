// Util Imports
import React from 'react';

// Button Types
type BtnVariant = 'primary' | 'secondary' | 'destructive';

// Button props
type ButtonPropTypes = Omit<React.ComponentProps<'button'>, 'className'> & {
  variant: BtnVariant;
  children: React.ReactNode;
};

// Shared Classes
const btnBase =
  'inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal';

// Utils (Helper functions)
const btnVariant: Record<BtnVariant, string> = {
  primary: 'bg-brand-teal border-transparent text-white hover:bg-brand-teal/90',
  secondary: 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50',
  destructive:
    'bg-white border-status-danger text-status-danger hover:bg-status-danger/10',
};

function getBtnVariant(variant: BtnVariant): string {
  return btnVariant[variant];
}

export default function Button({
  variant,
  children,
  ...props
}: ButtonPropTypes) {
  return (
    <button
      type="button"
      {...props}
      className={`${btnBase} ${getBtnVariant(variant)}`}
    >
      {children}
    </button>
  );
}
