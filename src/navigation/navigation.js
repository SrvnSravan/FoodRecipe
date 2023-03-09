import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './bottom-tabs';
import SplashScreen from '../screens/splash-screen';
import SignInPage from '../screens/sign-in';
import SignupPage from '../screens/sign-up';
import HomeScreen from '../screens/home-screen';
import MealPlanScreen from '../screens/meal-plan-screen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MelasPlan"
          component={MealPlanScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
