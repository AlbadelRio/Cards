import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, Text, Pressable
} from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={['#222222', '#EAECF2']}
      style={styles.linearGradient}
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
          testID="emailInput"
          style={styles.email}
          value={emailText}
          onChangeText={(text:any) => setEmail(text)}
          placeholder="email"
        />

        <TextInput
          testID="passwordInput"
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
    </LinearGradient>
  );
}
