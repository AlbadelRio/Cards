/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ToastAndroid
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards, subscribeToPackCard } from '../../redux/actions/packCardsActionCreators';

export default function Search() {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);

  const onChangeSearch = (query:any) => setSearchQuery(query);

  return (
    <View>
      <Text>SEARCH</Text>

      <TextInput
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {packCards
        .filter((value:any) => value.subject.toLowerCase()
          .includes(searchQuery.toLowerCase())
          || value.title
            .includes(searchQuery)).map((filteredValue:any) => (
              <Text>
                <Text key={filteredValue._id}>
                  {filteredValue.image}
                  {' '}
                  {filteredValue.title}
                  {' '}
                  {filteredValue.subject}
                  {' '}
                  {filteredValue.user[0].username}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    subscribeToPackCard(token, refreshToken, userId, filteredValue._id);
                    ToastAndroid.showWithGravity(
                      'Correctly Added!',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER
                    );
                  }}

                >
                  <Text>+</Text>

                </TouchableOpacity>
              </Text>
        ))}
    </View>
  );
}
