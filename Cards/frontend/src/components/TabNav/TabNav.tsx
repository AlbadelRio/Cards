import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Cards from '../Cards/Cards';
import Search from '../Search/Search';
import Discover from '../Discover/Discover';

const Tab = createBottomTabNavigator();

export default function NavTab():any {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={Cards} />
        <Tab.Screen name="SEARCH" component={Search} />
        <Tab.Screen name="DISCOVER" component={Discover} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
