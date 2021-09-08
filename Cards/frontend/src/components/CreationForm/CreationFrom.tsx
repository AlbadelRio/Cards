import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, Text
} from 'react-native';
import { useDispatch } from 'react-redux';

export default function CreationForm() {
  const dispatch = useDispatch();

  const [packCardTitle, setPackCardTitle] = useState('');
  const [packCardImage, setPackCardImage] = useState('');
  const [packCardSubject, setPackCardSubject] = useState('');
  return (
    <View>
      <View>
        <TextInput
          value={packCardTitle}
          onChangeText={(text:any) => setPackCardTitle(text)}
          placeholder="Title"
        />

        <TextInput
          value={packCardImage}
          onChangeText={(text:any) => setPackCardImage(text)}
          placeholder="Image"
        />
        <TextInput
          value={packCardSubject}
          onChangeText={(text:any) => setPackCardSubject(text)}
          placeholder="Subject"
        />

        <TouchableOpacity
          onPress={() => { }}
        >
          <Text>
            ADD

          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
