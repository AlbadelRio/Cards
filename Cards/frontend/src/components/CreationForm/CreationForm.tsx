/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  View, TextInput, Text, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { createPackCard } from '../../redux/actions/packCardsActionCreators';
import CardCreationForm from '../CardCreationForm/CardCreationForm';

export default function CreationForm({ route }:any) {
  const { token, refreshToken, userId } = route.params;
  const [packCardTitle, setPackCardTitle] = useState('');
  const [packCardSubject, setPackCardSubject] = useState('');
  const [cardForm, setCardForm] = useState(false);
  const actualizedPackCard = useSelector((store:any) => (store.currentPackCardReducer));

  console.log('hole', actualizedPackCard._id);
  const dispatch = useDispatch();
  const body = {
    title: packCardTitle,
    subject: packCardSubject,
    user: userId
  };
  function newPAckCardHandler() {
    if (packCardTitle && packCardSubject) {
      dispatch(createPackCard(
        token,
        refreshToken,
        body
      ));
    }
    setCardForm(true);
  }

  return (
    <View>
      {!cardForm && (
      <View>
        <TextInput
          value={packCardTitle}
          onChangeText={(text:any) => setPackCardTitle(text)}
          placeholder="Title"
        />

        <TextInput
          value={packCardSubject}
          onChangeText={(text:any) => setPackCardSubject(text)}
          placeholder="Subject"
        />

        <Pressable
          onPress={newPAckCardHandler}
        >
          <Text>
            ADD

          </Text>
        </Pressable>
      </View>
      )}
      { cardForm && <CardCreationForm />}
    </View>
  );
}
