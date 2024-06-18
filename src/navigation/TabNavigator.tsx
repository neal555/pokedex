/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainStackNavigator from './MainStackNavigator';
import CollectionStackNavigator from './CollectionStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'My home') {
            iconName = 'home';
          } else if (route.name === 'My collection') {
            iconName = 'collections-bookmark';
          }
          return (
            <MaterialIcons name={iconName as any} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#EE1B24',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="My home" component={MainStackNavigator} />
      <Tab.Screen name="My collection" component={CollectionStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
