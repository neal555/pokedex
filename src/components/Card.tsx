import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {BaseItem, Pokemon} from '../types/pokemonTypes';

interface CardProps {
  item: Pokemon | BaseItem;
  onPress?: () => void;
}

const Card = ({item, onPress}: CardProps) => {
  return (
    <Pressable style={styles.item} onPress={onPress} testID="card-component">
      <Text style={styles.text}>{String(item?.name ?? '').toUpperCase()}</Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFCC00',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
