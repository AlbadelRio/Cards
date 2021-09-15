/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, TextInput, Text, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { updateCard } from '../../redux/actions/cardActionCreator';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

import styles from './cardComponentStyles';

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
    <View>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.modify}>
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
          </View>
          <Text>Question:</Text>
          <TextInput
            value={question}
            editable={editable}
            onChangeText={(text:any) => setQuestion(text)}
          />
          <Text>Answer:</Text>
          <TextInput
            value={answer}
            editable={editable}
            onChangeText={(text:any) => setAnswer(text)}
          />
          <View style={styles.modify}>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
