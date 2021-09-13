/* eslint-disable no-unused-vars */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View, Image
} from 'react-native';
import CardsNavigation from '../CardsNavigation/CardsNavigation';
import Search from '../Search/Search';
import Discover from '../Discover/Discover';

import styles from './TabNavStyles';

const Tab = createBottomTabNavigator();

export default function NavTab():any {
  return (

    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HOME"
        component={CardsNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={{ uri: ('https://img.icons8.com/plumpy/24/000000/red-yellow-cards.png') }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="SEARCH"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={{ uri: ('https://img.icons8.com/plumpy/24/000000/search-more.png') }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="DISCOVER"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={styles.icon}
                source={{ uri: ('https://img.icons8.com/plumpy/24/000000/binoculars.png') }}
              />
            </View>
          )
        }}
      />

    </Tab.Navigator>

  );
}
