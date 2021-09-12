/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Pressable, Image, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cardStyles';
import { deletePackCard, loadPackcards } from '../../redux/actions/packCardsActionCreators';

export default function Cards({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const dispatch = useDispatch();
  const [allUserPackCards, setAllUserPackCards] = useState([]);

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, [packCards.length, packCards.packCards]);

  useEffect(() => {
    /* const subscripted = packCards
    ?.subscriptors?.map((element:any) => element.userId === userId); */

    const owned = packCards?.filter((value:any) => value?.user === userId);
    setAllUserPackCards(owned);
  }, [packCards, packCards.packCards]);

  function deleteHandler(pack:any) {
    dispatch(deletePackCard(
      token,
      refreshToken,
      pack._id

    ));
  }
  return (
    <View style={styles.background}>
      <View style={styles.scrollBackground}>
        <Text style={styles.h1}>MY CARDS</Text>
        <View>
          <ScrollView>
            <Text>
              {allUserPackCards.length}
              {' '}
              PACKCARDS
            </Text>
            {allUserPackCards.map((pack:any) => (
              <Pressable
                key={pack._id}
                style={styles.items}
                onPress={() => {
                  navigation.navigate('UpdateForm', {
                    pack
                  });
                }}
              >
                <Pressable
                  onPress={() => { deleteHandler(pack); }}
                >
                  <View
                    style={styles.delete}
                  >
                    <Image
                      style={styles.tinyDelete}
                      source={{
                        uri: 'https://img.icons8.com/plumpy/24/000000/waste.png'
                      }}
                    />
                  </View>
                </Pressable>
                <View style={styles.cards}>
                  <View style={styles.info}>
                    <Text style={styles.text}>{pack.title}</Text>
                    <Text>{pack.subject}</Text>
                  </View>
                  <View>
                    <Text>
                      {pack?.packCards?.length}
                      {' '}
                      CARDS
                    </Text>
                  </View>
                </View>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Carroussel', {
                      userId,
                      pack
                    });
                  }}
                >
                  <View>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://img.icons8.com/material-rounded/96/000000/play--v1.png'
                      }}
                    />
                  </View>
                </Pressable>
              </Pressable>
            ))}
            <View style={styles.button}>
              <Pressable
                onPress={() => {
                  navigation.navigate('CreationForm', {
                    userId,
                    token,
                    refreshToken
                  });
                }}
              >
                <Text style={styles.add}>ADD</Text>

              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
