import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './src/screens/home-screen';
import MyTabs from './src/navigation/bottom-tabs';
import SplashScreen from './src/screens/splash-screen';
import {NavigationContainerRefContext} from '@react-navigation/native';
import Navigation from './src/navigation/navigation';

const App = () => {
  return <Navigation />;
};
export default App;
