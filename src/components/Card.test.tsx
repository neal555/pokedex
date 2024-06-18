import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Card from './Card';
import {Pokemon} from '../types/pokemonTypes';

test('card presses work', () => {
  const onPressMock = jest.fn();
  const pokemon: Pokemon = {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
  };

  const {getByText} = render(<Card item={pokemon} onPress={onPressMock} />);

  fireEvent.press(getByText('PIKACHU'));
  expect(onPressMock).toHaveBeenCalled();
});

test('card renders correctly', () => {
  const onPressMock = jest.fn();
  const pokemon: Pokemon = {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
  };

  const {getByText} = render(<Card item={pokemon} onPress={onPressMock} />);

  expect(getByText('PIKACHU')).toBeDefined();
});
