/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  View, TextInput, Text, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createPackCard } from '../../redux/actions/packCardsActionCreators';

export default function CreationForm({ route }:any) {
  const { token, refreshToken, userId } = route.params;
  const [packCardTitle, setPackCardTitle] = useState('');
  const [packCardSubject, setPackCardSubject] = useState('');
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
  }

  return (
    <View>
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
        {false && <Text>hola</Text>}
      </View>
    </View>
  );
}
