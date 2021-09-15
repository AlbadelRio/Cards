/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards, subscribeToPackCard } from '../../redux/actions/packCardsActionCreators';

import styles from './searchStyles';

export default function Search() {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const [allPackcards, setAllPackCards] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, [packCards.subscriptors]);

  useEffect(() => {
    const notOwned = packCards?.filter((value:any) => (value?.user !== userId
      && !value?.subscriptors
      .some(({ userId: subscriptorId }: any) => subscriptorId === userId)));
    setAllPackCards(notOwned);
  }, [packCards]);
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
        {allPackcards && allPackcards?.filter((value:any) => value?.subject.toLowerCase()
          .includes(searchQuery.toLowerCase())
          || value?.title
            .includes(searchQuery)).map((filteredValue:any) => (

              <View
                style={styles.filteredPackCard}
                key={filteredValue._id}
              >
                <View
                  style={styles.info}
                >
                  <Text>{filteredValue.title}</Text>
                  <Text
                    style={styles.text}
                  >
                    {filteredValue.subject}

                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(subscribeToPackCard(
                        token, refreshToken, userId, filteredValue._id
                      ));
                    }}
                  >
                    <View
                      style={styles.addContainer}
                    >
                      <Image
                        style={styles.add}
                        source={{ uri: 'https://img.icons8.com/plumpy/96/000000/plus-2-math.png' }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

            ))}
      </ScrollView>
    </View>
  );
}
