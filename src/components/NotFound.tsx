import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface NotFoundProps {
  goBack: () => void;
}

const NotFound = ({goBack}: NotFoundProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokemon not found</Text>
      <Button title="Go back" onPress={goBack} testID="go-back-button" />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});
