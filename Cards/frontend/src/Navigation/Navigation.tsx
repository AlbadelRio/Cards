import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../components/Profile/Profile';
import Discover from '../components/Discover/Discover';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
