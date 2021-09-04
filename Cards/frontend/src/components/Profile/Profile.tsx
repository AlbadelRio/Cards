import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions/actionCreators';

const styles = StyleSheet.create({

  container: {
    marginTop: 300,
    height: 300

  },
  email: {
    width: 300,
    height: 50,
    padding: 30,
    backgroundColor: '#DCDCDC',
    flex: 1,
    alignSelf: 'center'

  },
  button: {
    width: 300,
    padding: 25,
    height: 70,
    marginTop: 30,
    backgroundColor: '#5EBBB0',
    flex: 1,
    alignSelf: 'center'
  }
});

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
  const [emailText, setEmail] = useState();
  const [passwordText, setPassword] = useState();
  return (
    <View>
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
          <Text>GET STARTED</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={newAccountHandler}
      />
    </View>
  );
}
