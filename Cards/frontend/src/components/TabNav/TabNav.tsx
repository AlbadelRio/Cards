import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardsNavigation from '../CardsNavigation/CardsNavigation';
import Search from '../Search/Search';
import Discover from '../Discover/Discover';

const Tab = createBottomTabNavigator();

export default function NavTab():any {
  return (

    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#272727',
        inactiveBackgroundColor: '#272727',
        style: {
          backgroundColor: '#272727',
          paddingBottom: 3
        }
      }}
    >
      <Tab.Screen name="HOME" component={CardsNavigation} />
      <Tab.Screen name="SEARCH" component={Search} />
      <Tab.Screen name="DISCOVER" component={Discover} />
    </Tab.Navigator>

  );
}
