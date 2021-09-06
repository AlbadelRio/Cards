/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Pressable, TextInput, TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

export default function Profile({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);
  const onChangeSearch = (query:any) => setSearchQuery(query);
  const cardsHandler = () => { navigation.navigate('Cards'); };

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
                  onPress={}
                >
                  <Text>+</Text>

                </TouchableOpacity>
              </Text>
        ))}
      <Pressable
        onPress={cardsHandler}
      >
        <Text>
          HOME

        </Text>
      </Pressable>
    </View>
  );
}
