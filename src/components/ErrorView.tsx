import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface ErrorViewProps {
  message: string;
  onRetry: () => void;
}

const ErrorView = ({message, onRetry}: ErrorViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
};

export default ErrorView;

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
