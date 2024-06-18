import React from 'react';
import {render} from '@testing-library/react-native';
import EmptyView from '../components/EmptyView';

describe('EmptyView', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<EmptyView />);
    const emptyViewContainer = getByTestId('empty-view-container');
    const emptyViewText = getByTestId('empty-view-text');

    expect(emptyViewContainer).toBeTruthy();
    expect(emptyViewText).toBeTruthy();
  });

  it('should have the correct text', () => {
    const {getByTestId} = render(<EmptyView />);
    const emptyViewText = getByTestId('empty-view-text');

    expect(emptyViewText.props.children).toBe('No pokemons saved yet');
  });
});
