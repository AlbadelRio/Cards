import React from 'react';
import {
  View, Text, Pressable
} from 'react-native';

export default function Discover({ navigation }:any) {
  const nextHandler = () => { navigation.navigate('Search'); };
  const SkipHandler = () => { navigation.navigate('Cards'); };

  return (
    <View>
      <Text>Discover</Text>
      <Text>Choose from these categories what interets you the most</Text>

      <Pressable
        onPress={SkipHandler}
      >
        <Text>
          SKIP

        </Text>
      </Pressable>
      <Pressable
        onPress={nextHandler}
      >
        <Text>
          NEXT

        </Text>
      </Pressable>
    </View>
  );
}
