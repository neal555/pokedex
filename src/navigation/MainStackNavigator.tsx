import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import {Ability, Move, Pokemon, Sprites} from '../types/pokemonTypes';
import EvolutionsScreen from '../screens/EvolutionsScreen';
import AbilitiesScreen from '../screens/AbilitiesScreen';
import MovesScreen from '../screens/MovesScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {pokemon: Pokemon; saved?: boolean};
  Evolutions: {sprites: Sprites | null};
  Abilities: {abilities: Ability[]};
  Moves: {moves: Move[]};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" id="MainStack">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Evolutions" component={EvolutionsScreen} />
      <Stack.Screen name="Abilities" component={AbilitiesScreen} />
      <Stack.Screen name="Moves" component={MovesScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
