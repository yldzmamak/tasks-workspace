import React from 'react';
import { render } from '@testing-library/react';
import { BasicSfsd } from './sfsd.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSfsd />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
