import React from 'react';
import {
  View, Text, Button
} from 'react-native';

export default function Profile({ navigation }:any) {
  const searchHandler = () => { navigation.navigate('Search'); };

  return (
    <View>
      <Text>Cards Section</Text>
      <Button
        title="Search"
        onPress={searchHandler}
      />

    </View>
  );
}
