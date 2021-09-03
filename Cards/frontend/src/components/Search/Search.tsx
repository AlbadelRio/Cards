import React from 'react';
import {
  View, Text, Button
} from 'react-native';

export default function Profile({ navigation }:any) {
  const cardsHandler = () => { navigation.navigate('Cards'); };
  return (
    <View>
      <Text>Search Section</Text>
      <Button
        title="Cards"
        onPress={cardsHandler}
      />
    </View>
  );
}
