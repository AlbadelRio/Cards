import React from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import Card from '../CardComponent/CardComponent';
import styles from './updateFormStyles';

export default function UpdateForm({ route: { params: { pack } } }:any) {
  return (
    <View style={styles.background}>
      <Text
        style={styles.title}
      >
        UpdateForm

      </Text>
      <View style={styles.backgroundCover}>
        <ScrollView>
          {pack?.packCards.map((card:any) => (
            <Card card={card} />))}
        </ScrollView>
      </View>
    </View>
  );
}
