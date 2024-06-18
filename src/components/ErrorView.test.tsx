import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorView from './ErrorView';

test('error view presses work', () => {
  const onRetryMock = jest.fn();

  const {getByText} = render(
    <ErrorView message="Error message" onRetry={onRetryMock} />,
  );

  fireEvent.press(getByText('Retry'));
  expect(onRetryMock).toHaveBeenCalled();
});

test('error view renders message', () => {
  const {getByText} = render(
    <ErrorView message="Error message" onRetry={() => {}} />,
  );

  expect(getByText('Error message')).toBeTruthy();
});
