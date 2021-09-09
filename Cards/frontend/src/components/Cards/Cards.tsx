/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Pressable, Image, StyleSheet, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30
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

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);

  const [allUserPackCards, setAllUserPackCards] = useState([]);
  useEffect(() => {
    const subscripted = packCards
    ?.filter((packCard:any) => packCard?.subscriptors?.includes(userId));

    const owned = packCards?.filter((value:any) => value?.user === userId);
    setAllUserPackCards(owned.concat(subscripted));
  }, [packCards]);

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
            style={styles.items}
          >
            <Text key={pack._id}>
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
