/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Pressable, Image, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import { deletePackCard, loadPackcards } from '../../redux/actions/packCardsActionCreators';
import styles from './cardStyles';

export default function Cards({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const subscriptedPack = useSelector((store:any) => store.subscribeToPackCardReducer);

  const dispatch = useDispatch();
  const [allUserPackCards, setAllUserPackCards] = useState([]);

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, [packCards.length, packCards.packCards, subscriptedPack]);

  useEffect(() => {
    const subscripted = packCards?.reduce((acc: any, packCard: any) => {
      if (packCard?.subscriptors
        .some(({ userId: subscriptorUserId }: any) => subscriptorUserId === userId)) {
        return [...acc, packCard];
      }
      return acc;
    }, []);

    const owned = packCards?.filter((value:any) => value?.user === userId);
    setAllUserPackCards(owned.concat(subscripted));
  }, [packCards]);

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
            {allUserPackCards.map((pack:any, index:any) => (
              <Pressable
                testID={`update${index}`}
                key={pack._id}
                style={styles.items}
                onPress={() => {
                  navigation.navigate('UpdateForm', {
                    pack
                  });
                }}
              >
                <LinearGradient
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#5EBBB0', '#5D5FEF']}
                  style={styles.linearGradient}
                >
                  <Pressable
                    testID={`delete${index}`}
                    onPress={() => { deleteHandler(pack); }}
                  >
                    <View>
                      <Image
                        style={styles.tinyDelete}
                        source={{
                          uri: 'https://img.icons8.com/plumpy/24/000000/waste.png'
                        }}
                      />
                    </View>
                  </Pressable>
                </LinearGradient>
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
                  testID={`carroussel${index}`}
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
              <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#5EBBB0', '#5D5FEF']}
                style={styles.linearGradientButton}
              >
                <Pressable
                  testID="add"
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
              </LinearGradient>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
