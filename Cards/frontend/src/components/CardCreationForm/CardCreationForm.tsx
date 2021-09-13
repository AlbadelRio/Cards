import React, { useState, useEffect } from 'react';
import {
  Text, View, TextInput, TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import createCard from '../../redux/actions/cardActionCreator';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

export default function CardCreationForm({ token, refreshToken, activePackCard }:any) {
  const cards = useSelector((store:any) => store.cardsReducer);
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');

  const dispatch = useDispatch();
  const body = {
    question: questionText,
    answer: answerText
  };
  function newCardHandler() {
    if (questionText && answerText) {
      dispatch(createCard(
        token,
        refreshToken,
        activePackCard,
        body
      ));
    }
  }
  useEffect(() => {
    dispatch(loadPackcards(token,
      refreshToken));
  }, [cards]);

  return (
    <View>
      <View>
        <TextInput
          value={questionText}
          onChangeText={(text:any) => setQuestionText(text)}
          placeholder="Question"
        />

        <TextInput
          value={answerText}
          onChangeText={(text:any) => setAnswerText(text)}
          placeholder="Answer"
        />

        <TouchableOpacity
          onPress={newCardHandler}
        >
          <Text>
            ADD

          </Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}
