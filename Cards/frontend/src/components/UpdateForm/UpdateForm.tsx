import React from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import Card from '../CardComponent/CardComponent';

export default function UpdateForm({ route: { params: { pack } } }:any) {
  return (
    <View>
      <ScrollView>
        <Text>UpdateForm</Text>
        {pack?.packCards.map((card:any) => (
          <Card card={card} />))}
      </ScrollView>
    </View>
  );
}
