/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards, subscribeToPackCard } from '../../redux/actions/packCardsActionCreators';

import styles from './searchStyles';

export default function Search() {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, [packCards.length]);

  const onChangeSearch = (query:any) => setSearchQuery(query);

  return (
    <View style={styles.background}>
      <ScrollView>
        <Text style={styles.title}>SEARCH</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBox}
            placeholder="  Search  "
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        {packCards && packCards?.filter((value:any) => value?.subject.toLowerCase()
          .includes(searchQuery.toLowerCase())
          || value?.title
            .includes(searchQuery)).map((filteredValue:any) => (

              <Text
                key={filteredValue._id}
              >
                <Text>{filteredValue.subject}</Text>
                <Text>{filteredValue.title}</Text>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(subscribeToPackCard(
                      token, refreshToken, userId, filteredValue._id
                    ));
                  }}
                >
                  <Text>
                    +
                  </Text>
                </TouchableOpacity>
              </Text>

            ))}
      </ScrollView>
    </View>
  );
}
