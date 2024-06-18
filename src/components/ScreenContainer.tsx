import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer = ({children}: ScreenContainerProps) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      bounces={false}
      testID="screen-container">
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
});
