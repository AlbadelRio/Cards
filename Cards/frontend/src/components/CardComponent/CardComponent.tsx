/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, TextInput, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import { updateCard } from '../../redux/actions/cardActionCreator';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30
  },
  items: {
    width: 400,
    height: 300
  }
});

export default function Card({ card }:any) {
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const dispatch = useDispatch();
  const body = {
    question,
    answer

  };

  function handleUpdate() {
    if (question || answer) {
      dispatch(updateCard(
        token,
        refreshToken,
        card._id,
        body
      ));
    }
  }

  return (
    <View
      style={styles.items}
    >

      <View>
        <TextInput
          key={card._id}
          value={question}
          onChangeText={(text:any) => setQuestion(text)}
        />
        <TextInput
          key={card._id}
          value={answer}
          onChangeText={(text:any) => setAnswer(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleUpdate}
      >
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://img.icons8.com/material-sharp/24/000000/edit--v3.png'
            }}
          />
        </View>
      </TouchableOpacity>
    </View>

  );
}
