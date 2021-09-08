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
    >
      <Tab.Screen name="HOME" component={CardsNavigation} />
      <Tab.Screen name="SEARCH" component={Search} />
      <Tab.Screen name="DISCOVER" component={Discover} />
    </Tab.Navigator>

  );
}
