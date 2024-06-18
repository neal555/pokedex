import React from 'react';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import Card from '../components/Card';

const MovesScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Moves', 'MainStack'>) => {
  return (
    <FlatList
      data={route.params.moves}
      keyExtractor={item => item.move.name}
      renderItem={({item}) => <Card item={item.move} />}
    />
  );
};

export default MovesScreen;
