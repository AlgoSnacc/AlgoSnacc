import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen.jsx';
import AlgoScreen from '../screens/AlgoScreen.jsx';
import AboutScreen from '../screens/AboutScreen.jsx';
import SignOut from './SignOut.jsx';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'md-home';
          } else if (route.name === 'Algorithms') {
            iconName = focused ? 'md-git-network' : 'ios-git-network';
          } else if (route.name === 'About') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Sign Out') {
            iconName = focused ? 'ios-exit' : 'md-exit';
          }
          return <Ionicons name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#002e59',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: { height: 80 },
        // tabStyle: { paddingTop: 10 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Algorithms" component={AlgoScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Sign Out" component={SignOut} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
