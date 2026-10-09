// Util Imports
import React from 'react';

// Button Types
type BtnVariant = 'primary' | 'secondary' | 'destructive';

// Button props
type ButtonPropTypes = React.ComponentProps<'button'> & {
  variant: BtnVariant;
  children: React.ReactNode;
};

// Utils (Helper functions)
const btnVariant: Record<BtnVariant, string> = {
  primary: '',
  secondary: '',
  destructive: '',
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
    <button type="button" {...props} className={getBtnVariant(variant)}>
      {children}
    </button>
  );
}
