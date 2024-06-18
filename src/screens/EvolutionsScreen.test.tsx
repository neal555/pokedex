import React from 'react';
import {render} from '@testing-library/react-native';
import EvolutionsScreen from '../screens/EvolutionsScreen';
import {mokedPokemon} from '../../test/mockPokemon';

describe('EvolutionsScreen', () => {
  test('renders without crashing', () => {
    render(
      <EvolutionsScreen
        route={{params: {sprites: mokedPokemon.sprites}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );
  });

  test('displays the correct screen title', () => {
    const {getByTestId} = render(
      <EvolutionsScreen
        route={{params: {sprites: mokedPokemon.sprites}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );
    const titleElement = getByTestId('default-images');
    expect(titleElement).toBeTruthy();
  });

  test('renders the Versions component', () => {
    const {getByTestId} = render(
      <EvolutionsScreen
        route={{params: {sprites: mokedPokemon.sprites}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );
    const versionsComponent = getByTestId('generations-images-1');
    expect(versionsComponent).toBeTruthy();
  });

  test('renders the version 2', () => {
    const {getByTestId} = render(
      <EvolutionsScreen
        route={{params: {sprites: mokedPokemon.sprites}} as any}
        navigation={{navigate: jest.fn() as any} as any}
      />,
    );
    const screenContainerComponent = getByTestId('generations-images-2');
    expect(screenContainerComponent).toBeTruthy();
  });
});
