import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator
      testID="loading-indicator"
      size={'large'}
      color={'#EE1B24'}
    />
  );
};
export default Loading;
