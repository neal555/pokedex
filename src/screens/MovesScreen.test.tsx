import React from 'react';
import {render} from '@testing-library/react-native';
import MovesScreen from './MovesScreen';
import {mokedPokemon} from '../../test/mockPokemon';

describe('MovesScreen', () => {
  it('should render moves', () => {
    const {getByText} = render(
      <MovesScreen
        route={{params: {moves: mokedPokemon.moves}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );

    expect(getByText('swords-dance'.toLocaleUpperCase())).toBeTruthy();
  });
});
