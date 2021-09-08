/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView
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
      <ScrollView>
        <Text>SEARCH</Text>

        <TextInput
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        {packCards?.filter((value:any) => value.subject.toLowerCase()
          .includes(searchQuery.toLowerCase())
          || value.title
            .includes(searchQuery)).map((filteredValue:any) => (
              <Text key={filteredValue._id}>
                <Text>
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
                    dispatch(subscribeToPackCard(token, refreshToken, userId, filteredValue._id));
                  }}

                >
                  <Text>+</Text>

                </TouchableOpacity>
              </Text>
            ))}
      </ScrollView>
    </View>
  );
}
