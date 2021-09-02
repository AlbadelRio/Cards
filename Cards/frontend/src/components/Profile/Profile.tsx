import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Button
} from 'react-native';
import { login } from '../../redux/actions/actionCreators';

const styles = StyleSheet.create({

  email: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10

  }
});

export default function Profile() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <TextInput
        style={styles.email}
        value={email}
        onChangeText={(event) => setEmail(event.target.value)}
        placeholder="email"
      />
      <TextInput
        style={styles.email}
        value={password}
        onChangeText={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <Button
        title="Right button"
        onPress={() => login()}
      />
    </View>
  );
}
