/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Pressable, Image, StyleSheet, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deletePackCard, loadPackcards } from '../../redux/actions/packCardsActionCreators';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30
  },
  tinyDelete: {
    width: 20,
    height: 20
  },
  items: {
    width: 400,
    height: 100
  }
});
export default function Cards({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const userId = useSelector((store:any) => store.auth.user.user._id);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const dispatch = useDispatch();
  const [allUserPackCards, setAllUserPackCards] = useState([]);
  useEffect(() => {
    console.log('he entrado en el useEffect');
    dispatch(loadPackcards(token, refreshToken));
  }, [packCards.length]);

  useEffect(() => {
    console.log('he entrado en el 2do useEffect');
    const subscripted = packCards
    ?.filter((packCard:any) => packCard?.subscriptors?.includes(userId));

    const owned = packCards?.filter((value:any) => value?.user === userId);
    setAllUserPackCards(owned.concat(subscripted));
  }, [packCards, packCards.packCards]);

  function deleteHandler(pack:any) {
    dispatch(deletePackCard(
      token,
      refreshToken,
      pack._id

    ));
  }
  console.log(allUserPackCards.length);
  return (
    <View>
      <ScrollView>
        <Text>My CARDS</Text>
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
              <View>
                <Image
                  style={styles.tinyDelete}
                  source={{
                    uri: 'https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'
                  }}
                />
              </View>
            </Pressable>
            <Text>
              {pack.image}
              {pack.subject}
              {pack.title}
              <Text>
                {pack?.packCards?.length}
                {' '}
                CARDS
              </Text>
              <Pressable>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://img.icons8.com/material-rounded/96/000000/play--v1.png'
                    }}
                  />
                </View>
              </Pressable>
            </Text>
          </Pressable>
        ))}
        <Pressable
          onPress={() => {
            navigation.navigate('CreationForm', {
              userId,
              token,
              refreshToken
            });
          }}
        >
          <Text>ADD</Text>

        </Pressable>
      </ScrollView>
    </View>
  );
}
