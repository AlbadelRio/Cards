import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity
} from 'react-native';

export default function CardCreationForm({ token, refreshToken, userId }:any) {
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const body = {
    question: questionText,
    answer: answerText,
    user: userId
  };
  function newCardHandler() {
    if (questionText && answerText) {
      dispatch(createCard(
        token,
        refreshToken,
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
          placeholder="Subject"
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
