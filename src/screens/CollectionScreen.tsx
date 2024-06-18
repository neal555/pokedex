import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CollectionStackParamList} from '../navigation/CollectionStackNavigator';
import {Pokemon} from '../types/pokemonTypes';
import {getSavedPokemons} from '../utils/savedPokemons';
import Card from '../components/Card';
import Loading from '../components/Loading';
import EmptyView from '../components/EmptyView';

type CollectionScreenProps = NativeStackScreenProps<
  CollectionStackParamList,
  'Collection'
>;

const CollectionScreen = ({route, navigation}: CollectionScreenProps) => {
  const pokemon = route.params;
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleGetPokemons = async () => {
    setIsLoading(true);
    setIsEmpty(false);
    const response = await getSavedPokemons();
    setData(response);
    if (response.length === 0) {
      setIsEmpty(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (pokemon) {
      handleGetPokemons();
    }
  }, [pokemon]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleGetPokemons();
    });

    return unsubscribe;
  }, [navigation]);

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <EmptyView />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.url}
      renderItem={({item}) => (
        <Card
          onPress={() => navigation.navigate('Details', item)}
          item={item}
        />
      )}
    />
  );
};

export default CollectionScreen;
