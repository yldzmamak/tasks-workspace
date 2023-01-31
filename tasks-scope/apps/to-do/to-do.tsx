import React, { ReactNode } from 'react';

export type ToDoProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ToDo({ children }: ToDoProps) {
  return <div>{children}</div>;
}
