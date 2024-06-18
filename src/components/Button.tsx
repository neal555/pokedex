import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface LinkProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({onPress, title, variant = 'primary'}: LinkProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        variant === 'primary'
          ? styles.containerPrimary
          : styles.containerSecondary
      }>
      <Text
        style={
          variant === 'primary' ? styles.titlePrimary : styles.titleSecondary
        }>
        {title}
      </Text>
      <MaterialIcons
        name={'keyboard-arrow-right'}
        size={24}
        color={variant === 'primary' ? '#EE1B24' : '#FFCC00'}
      />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerPrimary: {
    borderColor: '#EE1B24',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  titlePrimary: {
    fontSize: 20,
    fontWeight: '600',
    color: '#EE1B24',
    textDecorationLine: 'underline',
  },
  containerSecondary: {
    borderColor: '#FFCC00',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  titleSecondary: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFCC00',
    textDecorationLine: 'underline',
  },
});
