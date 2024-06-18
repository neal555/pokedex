import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import CollectionScreen from './CollectionScreen';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('CollectionScreen', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(
      <CollectionScreen
        navigation={
          {navigate: jest.fn() as any, addListener: () => jest.fn()} as any
        }
        route={{} as any}
      />,
    );

    const loadingComponent = getByTestId('loading-indicator');
    expect(loadingComponent).toBeTruthy();

    await waitFor(() => {
      const cardComponent = getByTestId('empty-view-container');
      expect(cardComponent).toBeTruthy();
    });
  });
});
