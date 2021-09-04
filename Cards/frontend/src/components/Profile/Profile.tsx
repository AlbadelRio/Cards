import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/actionCreators';

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#222222'
  },
  title: {
    fontSize: 60,
    color: '#E5E5E5',
    textAlign: 'center',
    marginTop: 180,
    fontWeight: 'bold'
  },
  container: {
    marginTop: 85,
    height: 300,
    alignSelf: 'center'
  },
  email: {
    width: 300,
    height: 50,
    padding: 30,
    margin: 5,
    backgroundColor: '#DCDCDC',
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5

  },
  button: {
    width: 300,
    padding: 25,
    height: 70,
    marginTop: 30,
    backgroundColor: '#5EBBB0',
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    color: '#222222',
    textAlign: 'center'
  },
  pressableText: {
    fontSize: 14,
    color: '#E5E5E5',
    marginTop: 35,
    marginBottom: 20,
    marginRight: 30,
    textAlign: 'right'
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
  const [emailText, setEmail] = useState('');
  console.log(emailText);
  const [passwordText, setPassword] = useState('');
  console.log(passwordText);
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
