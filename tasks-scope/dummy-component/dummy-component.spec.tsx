import React from 'react';
import { render } from '@testing-library/react';
import { BasicDummyComponent } from './dummy-component.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDummyComponent />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
