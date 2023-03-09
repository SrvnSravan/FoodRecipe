import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importing Screens...
import HomeScreen from '../screens/home-screen';
import SignInPage from '../screens/sign-in';
import Meals from '../screens/meals';
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
          } else if (route.name === 'Meals') {
            iconName = focused ? 'fast-food-sharp' : 'fast-food-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          } else if (route.name === 'More') {
            iconName = focused
              ? 'ellipsis-horizontal-sharp'
              : 'ellipsis-horizontal-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Meals" component={Meals} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
