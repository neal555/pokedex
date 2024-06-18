import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Ability, Move, Pokemon, Sprites} from '../types/pokemonTypes';
import CollectionScreen from '../screens/CollectionScreen';
import DetailsScreen from '../screens/DetailsScreen';
import EvolutionsScreen from '../screens/EvolutionsScreen';
import AbilitiesScreen from '../screens/AbilitiesScreen';
import MovesScreen from '../screens/MovesScreen';

export type CollectionStackParamList = {
  Collection: undefined;
  Details: Pokemon;
  Evolutions: {sprites: Sprites | null};
  Abilities: {abilities: Ability[]};
  Moves: {moves: Move[]};
};

const Stack = createNativeStackNavigator<CollectionStackParamList>();

const CollectionStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Collection" id="CollectionStack">
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Evolutions" component={EvolutionsScreen} />
      <Stack.Screen name="Abilities" component={AbilitiesScreen} />
      <Stack.Screen name="Moves" component={MovesScreen} />
    </Stack.Navigator>
  );
};

export default CollectionStackNavigator;
