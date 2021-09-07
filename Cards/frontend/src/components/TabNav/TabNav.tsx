import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cards from '../Cards/Cards';
import Search from '../Search/Search';
import Discover from '../Discover/Discover';

const Tab = createBottomTabNavigator();

export default function NavTab():any {
  return (

    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      style={{
        tabBarOptions: {
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 12
          },
          style: {
            backgroundColor: 'blue'
          }
        }
      }}
    >
      <Tab.Screen name="HOME" component={Cards} />
      <Tab.Screen name="SEARCH" component={Search} />
      <Tab.Screen name="DISCOVER" component={Discover} />
    </Tab.Navigator>

  );
}
