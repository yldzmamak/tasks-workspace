/* import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './to-do.composition';

it('should render with the correct text', (props: Partial<ButtonProps>) => {
  render(<Button label="label" onClick={jest.fn()} {...props} />);
  const rendered = screen.getByRole('button', { name: /primary/i });
  expect(rendered).toBeTruthy();
});
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';

export interface DataItem {
  value: string;
  label: string;
}

export interface DropdownListProps {
  data: DataItem[];
  onRemoveItem: (item: DataItem, index: number) => void;
  labels: {
    show: string;
    hide: string;
  };
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export const DropdownList = ({
  data,
  onRemoveItem,
  labels,
}: DropdownListProps) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const onToggleVisibility = (data?: string) =>
    setDropdownOpened((opened) => !opened);

  return (
    <div>
      <Button
        onClick={onToggleVisibility}
        label={dropdownOpened ? labels.hide : labels.show}
      />

      {dropdownOpened && (
        <ul data-testid="dropdown-ul">
          {data.map((item, index) => (
            <li key={item.value} data-testid={`dropdown-li-${item.value}`}>
              {item.label}

              <button onClick={() => onRemoveItem(item, index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const labels = {
  hide: 'Hide',
  show: 'Show',
};

const data = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
];

const makeSut = (props: Partial<DropdownListProps>) => {
  [
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
  ].map((item) => {
    item.value = '5';
    console.log('item');
  });

  return render(
    <DropdownList
      data={data}
      labels={labels}
      onRemoveItem={jest.fn()}
      {...props}
    />
  );
};

describe('<DropdownList />', () => {
  test('Should not render ul component on initial render', () => {
    const { container } = makeSut({});

    expect(container.querySelector('ul')).not.toBeInTheDocument();
  });

  test('Should render ul component when click on button', () => {
    const { container, getByText } = makeSut({});

    fireEvent.click(getByText(labels.show));

    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  test('Should switch button label on click', () => {
    const { getByText } = makeSut({});

    expect(getByText(labels.show)).toBeInTheDocument();

    fireEvent.click(getByText(labels.show));

    expect(getByText(labels.hide)).toBeInTheDocument();
  });

  test('Should render 3 li correctly', () => {
    const { getByText, container } = makeSut({});

    fireEvent.click(getByText(labels.show));

    expect(container.querySelectorAll('li').length).toBe(data.length);
  });

  test('Should call onRemoveItem callback correctly', () => {
    const onRemoveItem = jest.fn();

    const { getByText, getAllByText } = makeSut({ onRemoveItem });

    fireEvent.click(getByText(labels.show));

    fireEvent.click(getAllByText(/Remove/)[2]);

    expect(onRemoveItem).toHaveBeenCalledWith(data[2], 2);
  });
});

const makeSutButton = (props: Partial<ButtonProps>) => {
  return render(<Button label="label" onClick={jest.fn()} {...props} />);
};

describe('<Button />', () => {
  test('Should render label correctly', () => {
    const { getByText } = makeSutButton({ label: 'My Button' });

    expect(getByText(/My Button/)).toBeInTheDocument();
  });

  test('Should call onClick successfully', () => {
    const spy = jest.fn();

    const { getByText } = makeSutButton({ onClick: spy });

    fireEvent.click(getByText(/label/));

    expect(spy).toHaveBeenCalled();
  });
});
