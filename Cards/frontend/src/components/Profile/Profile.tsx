import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, Text, Pressable
} from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions/authActionCreators';

import styles from './profileStyles';

export default function Profile({ navigation }:any) {
  const dispatch = useDispatch();
  function handleLogin(emailText:any, passwordText:any) {
    if (emailText) {
      dispatch(login({
        email: emailText,
        password: passwordText
      }));
    }
  }

  const newAccountHandler = () => { navigation.navigate('CreateAccount'); };
  const [emailText, setEmail] = useState('');
  const [passwordText, setPassword] = useState('');
  return (
    <View
      style={styles.component}
    >
      <View>
        <Text
          style={styles.title}
        >
          CARDS

        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.email}
          value={emailText}
          onChangeText={(text:any) => setEmail(text)}
          placeholder="email"
        />

        <TextInput
          style={styles.email}
          value={passwordText}
          onChangeText={(text:any) => setPassword(text)}
          placeholder="password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => { handleLogin(emailText, passwordText); }}
        >
          <Text
            style={styles.text}
          >
            GET STARTED

          </Text>
        </TouchableOpacity>
      </View>

      <Pressable
        onPress={newAccountHandler}
      >
        <Text
          style={styles.pressableText}
        >
          NEW ACCOUNT

        </Text>
      </Pressable>
    </View>
  );
}
