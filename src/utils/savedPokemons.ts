import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../types/pokemonTypes';

export const getSavedPokemons = async (): Promise<Pokemon[]> => {
  try {
    const savedPokemons = await AsyncStorage.getItem('savedPokemons');
    return savedPokemons ? JSON.parse(savedPokemons) : [];
  } catch (error) {
    return [];
  }
};

export const savePokemon = async (pokemon: Pokemon) => {
  if (await checkIfPokemonIsSaved(pokemon)) {
    return {success: false};
  }
  const savedPokemons = await getSavedPokemons();
  const newSavedPokemons = [...savedPokemons, pokemon];
  await AsyncStorage.setItem('savedPokemons', JSON.stringify(newSavedPokemons));
  return {success: true};
};

export const removePokemon = async (pokemon: Pokemon) => {
  const savedPokemons = await getSavedPokemons();
  const newSavedPokemons = savedPokemons.filter(
    savedPokemon => savedPokemon.url !== pokemon.url,
  );
  await AsyncStorage.setItem('savedPokemons', JSON.stringify(newSavedPokemons));
  return {success: true};
};

export const checkIfPokemonIsSaved = async (pokemon: Pokemon) => {
  const savedPokemons = await getSavedPokemons();
  return savedPokemons.some(savedPokemon => savedPokemon.url === pokemon.url);
};
