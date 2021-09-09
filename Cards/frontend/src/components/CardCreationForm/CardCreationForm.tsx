import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import createCard from '../../redux/actions/cardActionCreator';

export default function CardCreationForm({ token, refreshToken, activePackCard }:any) {
  console.log('CardCreation', activePackCard);
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
