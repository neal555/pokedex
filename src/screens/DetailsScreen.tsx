import React, {useCallback, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {useQuery} from '@tanstack/react-query';

import Loading from '../components/Loading';
import ErrorView from '../components/ErrorView';
import NotFound from '../components/NotFound';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import {getPokemon} from '../network/services';
import {
  checkIfPokemonIsSaved,
  removePokemon,
  savePokemon,
} from '../utils/savedPokemons';

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details',
  'MainStack'
>;

const DetailsScreen = ({route, navigation}: DetailScreenProps) => {
  const pokemon = route.params;

  const [isSaved, setIsSaved] = React.useState(false);

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['pokemon', pokemon.url],
    queryFn: () => getPokemon(pokemon.url),
  });

  useEffect(() => {
    const checkIfSaved = async () => {
      if (!pokemon) {
        return;
      }
      setIsSaved(await checkIfPokemonIsSaved(pokemon));
    };
    checkIfSaved();
  }, [pokemon]);

  const handleSave = useCallback(async () => {
    if (!pokemon) {
      return;
    }
    const {success} = await savePokemon(pokemon);
    if (success) {
      setIsSaved(true);
    }
  }, [pokemon]);

  const handleRemove = useCallback(async () => {
    if (!pokemon) {
      return;
    }
    const {success} = await removePokemon(pokemon);
    if (success) {
      setIsSaved(false);
    }
  }, [pokemon]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <ErrorView onRetry={refetch} message="Error getting pokemon details" />
    );
  }

  if (!data) {
    return <NotFound goBack={() => navigation.goBack()} />;
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>{String(data.name).toUpperCase()}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              (data?.sprites?.other?.showdown?.front_default as string) ?? '',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.text}>Height: {data?.height ?? 'NA'}</Text>
        <Text style={styles.text}>Weight: {data?.weight ?? 'NA'}</Text>
        <Text style={styles.text}>Order: {data?.order ?? 'NA'}</Text>
        <Text style={styles.text}>
          Base experience: {data?.base_experience ?? 'NA'}
        </Text>
      </View>
      <View style={styles.buttnsSection}>
        <Button
          title="Evolutions"
          onPress={() =>
            navigation.navigate('Evolutions', {sprites: data?.sprites})
          }
        />

        <Button
          title="Abilities"
          onPress={() =>
            navigation.navigate('Abilities', {abilities: data?.abilities ?? []})
          }
        />

        <Button
          title="Moves"
          onPress={() =>
            navigation.navigate('Moves', {moves: data?.moves ?? []})
          }
        />

        <Button
          title={
            isSaved ? 'Remove from mi collection' : 'Save on my collection'
          }
          onPress={isSaved ? handleRemove : handleSave}
          variant="secondary"
        />
      </View>
    </ScreenContainer>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#CCCCCC',
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 24,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  text: {
    fontSize: 16,
    marginLeft: 4,
    color: '#000',
  },
  buttnsSection: {
    width: '100%',
    gap: 8,
    marginTop: 16,
  },
});
