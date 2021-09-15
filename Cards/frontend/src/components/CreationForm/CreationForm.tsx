/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  View, TextInput, Text, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { createPackCard } from '../../redux/actions/packCardsActionCreators';

import CardCreationForm from '../CardCreationForm/CardCreationForm';
import styles from './CreationFormStyles';

export default function CreationForm({ route }:any) {
  const { token, refreshToken, userId } = route.params;
  const [packCardTitle, setPackCardTitle] = useState('');
  const [packCardSubject, setPackCardSubject] = useState('');
  const [cardForm, setCardForm] = useState(false);
  const actualizedPackCard = useSelector((store:any) => (store.currentPackCardReducer));

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
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#5EBBB0', '#E5E5E5']}
      style={styles.linearGradient}
    >
      <View
        style={styles.container}
      >
        <View
          style={styles.form}
        >
          <TextInput
            style={styles.entrance}
            value={packCardTitle}
            onChangeText={(text:any) => setPackCardTitle(text)}
            placeholder="Title"
          />

          <TextInput
            style={styles.entrance}
            value={packCardSubject}
            onChangeText={(text:any) => setPackCardSubject(text)}
            placeholder="Subject"
          />

          <View>
            <Pressable
              onPress={newPAckCardHandler}
            >
              <Text
                style={styles.button}
              >
                ADD

              </Text>
            </Pressable>
          </View>
        </View>
        { cardForm && (
        <CardCreationForm
          token={token}
          refreshToken={refreshToken}
          activePackCard={actualizedPackCard._id}
        />
        )}
      </View>
    </LinearGradient>
  );
}
