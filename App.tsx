/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Router } from './src/routes';
import { COLORS } from './constants/theme';
import { MobileProvider } from './src/context/appContext';
import { Loading } from './src/screens/Loading';

const App = () => {
  return (
    <MobileProvider>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
        <Router />
        <Loading />
      </SafeAreaView>
    </MobileProvider>
  );
};

export default App;
