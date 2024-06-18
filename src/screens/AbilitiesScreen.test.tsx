import React from 'react';
import {render} from '@testing-library/react-native';
import AbilitiesScreen from './AbilitiesScreen';
import {mokedPokemon} from '../../test/mockPokemon';

describe('AbilitiesScreen', () => {
  it('should render abilities', () => {
    const {getByText} = render(
      <AbilitiesScreen
        route={{params: {abilities: mokedPokemon.abilities}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );

    expect(getByText('overgrow'.toLocaleUpperCase())).toBeTruthy();
  });
});
