import React, { ReactNode } from 'react';

export type SfsdProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Sfsd({ children }: SfsdProps) {
  return (
    <div>
      {children}
    </div>
  );
}
