import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders the loading indicator', () => {
    const {getByTestId} = render(<Loading />);
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });
});
