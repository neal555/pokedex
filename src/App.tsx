import React from 'react';
import {StatusBar} from 'react-native';
import QueryProvider from './network/QueryProvider';
import Navigator from './navigation/Navigator';

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </QueryProvider>
  );
}

export default App;
