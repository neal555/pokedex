import axios from 'axios';
import {
  PokemonDetailsResponse,
  PokemonListResponse,
} from '../types/pokemonTypes';

export const getPokemons = async ({pageParam}: any) => {
  const res = await axios.get<PokemonListResponse>(pageParam);
  return res.data;
};

export const getPokemon = async (url: string) => {
  const newUrl = url.includes('https://pokeapi.co/api/v2/pokemon')
    ? url
    : `https://pokeapi.co/api/v2/pokemon/${url}`;
  const res = await axios.get<PokemonDetailsResponse>(newUrl);
  return res.data;
};
