import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cards from '../Cards/Cards';
import Carroussel from '../Carroussel/Carroussel';
import CreationForm from '../CreationForm/CreationFrom';
import UpdateForm from '../UpdateForm/UpdateForm';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (

    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Cards"
    >
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="Carroussel" component={Carroussel} />
      <Stack.Screen name="CreationForm" component={CreationForm} />
      <Stack.Screen name="UpdateForm" component={UpdateForm} />

    </Stack.Navigator>
  );
}
