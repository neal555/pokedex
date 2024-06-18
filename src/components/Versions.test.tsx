import React from 'react';
import {render} from '@testing-library/react-native';
import Versions from './Versions';
import {mokedPokemon} from '../../test/mockPokemon';

describe('Versions component', () => {
  test('renders without crashing', () => {
    render(<Versions sprites={null} />);
  });

  test('renders images when sprites are provided', () => {
    const sprites = mokedPokemon.sprites;

    const {getByTestId} = render(<Versions sprites={sprites as any} />);
    const defaultImages = getByTestId('default-images');
    const generationsImages = getByTestId('generations-images-0');

    expect(generationsImages).toBeDefined();
    expect(defaultImages).toBeDefined();
  });

  test('does not render images when sprites are null', () => {
    const {queryByTestId} = render(<Versions sprites={null} />);
    const defaultImages = queryByTestId('default-images');
    const generationsImages = queryByTestId('generations-images-0');

    expect(defaultImages).toBeNull();
    expect(generationsImages).toBeNull();
  });
});
