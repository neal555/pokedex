import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('Button component', () => {
  test('renders correctly with default variant', () => {
    const {getByText} = render(<Button title="Click me" onPress={() => {}} />);
    const button = getByText('Click me');
    expect(button).toBeTruthy();
  });

  test('renders correctly with primary variant', () => {
    const {getByText} = render(
      <Button title="Click me" onPress={() => {}} variant="primary" />,
    );
    const button = getByText('Click me');
    expect(button).toBeTruthy();
  });

  test('renders correctly with secondary variant', () => {
    const {getByText} = render(
      <Button title="Click me" onPress={() => {}} variant="secondary" />,
    );
    const button = getByText('Click me');
    expect(button).toBeTruthy();
  });

  test('calls onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button title="Click me" onPress={onPressMock} />,
    );
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
