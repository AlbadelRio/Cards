import React from 'react';
import {
  View, Text, Button
} from 'react-native';

export default function Profile({ navigation }:any) {
  const nextHandler = () => { navigation.navigate('Search'); };
  const SkipHandler = () => { navigation.navigate('Cards'); };
  return (
    <View>
      <Text>Discover Section</Text>
      <Button
        title="Search"
        onPress={nextHandler}
      />
      <Button
        title="Skip"
        onPress={SkipHandler}
      />
    </View>
  );
}
