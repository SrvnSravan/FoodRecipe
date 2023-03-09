import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Screens...
import HomeScreen from '../screens/home-screen';
import SignInPage from '../screens/sign-in';
import MealsScreen from '../screens/meals';
import ProfileScreen from '../screens/profile';
import MoreScreen from '../screens/more';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              return <IonIcons name={iconName} size={size} color={color} />;
            }
          },
        })}
        //   tabBarOptions={{
        //     activeTintColor: 'blue',
        //     inactiveTintColor: 'gray',
        //   }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SignIn" component={SignInPage} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    
  );
};

export default MyTabs;
