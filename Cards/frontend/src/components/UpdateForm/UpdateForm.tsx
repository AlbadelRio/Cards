/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Text, View } from 'react-native';
// import { useSelector } from 'react-redux';

export default function UpdateForm({ route: { params: { pack } } }:any) {
  // const pack = useSelector((store:any) => (store.findPackCardReducer));
  console.log('pack');
  return (
    <>
      <Text>UpdateForm</Text>
      {pack?.packCards.map((card:any) => (
        <View>
          <Text
            key={card._id}
          >
            {card.question}
            {console.log(card.question)}
          </Text>
        </View>
      ))}
    </>
  );
}
