import React, { ReactNode } from 'react';

export type DummyComponentProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DummyComponent({ children }: DummyComponentProps) {
  return <div>{children}</div>;
}

