import React from 'react';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import Card from '../components/Card';

const AbilitiesScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Abilities', 'MainStack'>) => {
  return (
    <FlatList
      data={route.params.abilities}
      keyExtractor={item => item.ability.name}
      renderItem={({item}) => <Card item={item.ability} />}
    />
  );
};

export default AbilitiesScreen;
