import React from 'react';
import {
  View, TextInput, StyleSheet, Button
} from 'react-native';

const styles = StyleSheet.create({

  email: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default function Profile({ navigation }:any) {
  const loginHandler = () => { navigation.navigate('Discover'); };
  const newAccountHandler = () => { navigation.navigate('CreateAccount'); };
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  return (
    <View>
      <TextInput
        style={styles.email}
        // value={email}
        // onChangeText={() => setEmail()}
        placeholder="email"
      />
      <TextInput
        style={styles.email}
        // value={password}
        // onChangeText={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <Button
        title="GET STARTED"
        onPress={loginHandler}
      />
      <Button
        title="NEW ACCOUNT"
        onPress={newAccountHandler}
      />
    </View>
  );
}
