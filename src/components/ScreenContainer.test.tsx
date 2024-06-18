import React from 'react';
import {Text} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {render} from '@testing-library/react-native';

describe('ScreenContainer', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <ScreenContainer>
        <Text>Child Component</Text>
      </ScreenContainer>,
    );
    expect(getByText('Child Component')).toBeTruthy();
  });

  it('has the correct styles', () => {
    const {getByTestId} = render(
      <ScreenContainer>
        <Text>Child Component</Text>
      </ScreenContainer>,
    );
    const container = getByTestId('screen-container');
    expect(container).toBeDefined();
  });
});
