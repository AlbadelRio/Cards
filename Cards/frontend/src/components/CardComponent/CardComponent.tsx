/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView
} from 'react-native';
import { updateCard } from '../../redux/actions/cardActionCreator';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

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
  const [editable, setEditable] = useState(false);
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const cards = useSelector((store:any) => store.cardsReducer);
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
    setEditable(false);
  }
  useEffect(() => {
    dispatch(loadPackcards(token,
      refreshToken));
  }, [cards]);

  return (
    <View
      style={styles.items}
    >
      <ScrollView>
        <View>
          <TextInput
            key={card._id}
            value={question}
            editable={editable}
            onChangeText={(text:any) => setQuestion(text)}
          />
          <TextInput
            key={card._id}
            value={answer}
            editable={editable}
            onChangeText={(text:any) => setAnswer(text)}
          />
        </View>
        {!editable && (
        <TouchableOpacity
          onPress={() => setEditable(true)}
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
        )}
        {editable && (
        <TouchableOpacity
          onPress={handleUpdate}
        >
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/30/000000/add-file.png'
              }}
            />
          </View>
        </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
