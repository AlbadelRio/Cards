import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';
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

                <Stack.Screen name="tabNav" component={TabNav} />
              </>
            )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
