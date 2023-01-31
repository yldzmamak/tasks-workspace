import React from 'react';
import { ToDo } from './to-do';
import { Button as AntButton } from 'antd';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
