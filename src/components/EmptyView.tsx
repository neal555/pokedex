import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyView = () => {
  return (
    <View style={styles.container} testID="empty-view-container">
      <Text style={styles.text} testID="empty-view-text">
        No pokemons saved yet
      </Text>
    </View>
  );
};

export default EmptyView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
