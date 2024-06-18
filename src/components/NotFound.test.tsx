import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NotFound from '../components/NotFound';

describe('NotFound component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<NotFound goBack={() => {}} />);
    const textElement = getByText('Pokemon not found');
    expect(textElement).toBeTruthy();
  });

  test('calls goBack function when button is pressed', () => {
    const goBackMock = jest.fn();
    const {getByTestId} = render(<NotFound goBack={goBackMock} />);
    const buttonElement = getByTestId('go-back-button');
    fireEvent.press(buttonElement);
    expect(goBackMock).toHaveBeenCalled();
  });
});
