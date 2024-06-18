import React from 'react';
import {FlatList} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {getPokemons} from '../network/services';
import Card from '../components/Card';
import ErrorView from '../components/ErrorView';
import Loading from '../components/Loading';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'MainStack'
>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: getPokemons,
    initialPageParam: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    getNextPageParam: lastPage => lastPage.next,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorView onRetry={refetch} message="Error getting pokemons" />;
  }
  return (
    <FlatList
      onRefresh={refetch}
      refreshing={isRefetching}
      data={data?.pages?.map(page => page.results).flat()}
      keyExtractor={item => item.url}
      renderItem={({item}) => (
        <Card
          onPress={() => navigation.navigate('Details', item)}
          item={item}
        />
      )}
      onEndReached={() => hasNextPage && fetchNextPage()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isFetchingNextPage ? <Loading /> : null}
    />
  );
};

export default HomeScreen;
