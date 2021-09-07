import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';
import Discover from '../components/Discover/Discover';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import TabNav from '../components/TabNav/TabNav';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isValidPassword } = useSelector((store: any) => store.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >

        {
          !isValidPassword
            ? <Stack.Screen name="Profile" component={Profile} />
            : (
              <>
                <Stack.Screen name="Discover" component={Discover} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Cards" component={Cards} />
                <Stack.Screen name="TabNav" component={TabNav} />
              </>
            )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
