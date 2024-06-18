import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import Versions from '../components/Versions';
import ScreenContainer from '../components/ScreenContainer';

type EvolutionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Evolutions',
  'MainStack'
>;

const EvolutionsScreen = ({route}: EvolutionScreenProps) => {
  return (
    <ScreenContainer>
      <Versions sprites={route?.params?.sprites ?? null} />
    </ScreenContainer>
  );
};

export default EvolutionsScreen;
