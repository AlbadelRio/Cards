/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';
import getRandomPackCardBySubject from '../../redux/actions/randomActionCreator';
import styles from './discoverStlyles';

export default function Discover({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const randomPack = useSelector((store:any) => store?.randomPackCardReducer);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);

  const filteredPackCard = Array.from(new Set(packCards?.map((packCard:any) => packCard?.subject)))
    .map((subject) => ({
      subject
    }));

  function redirection(pack:any) {
    navigation.navigate('Carroussel',
      { pack: pack[0] });
  }
  function randomHandler(element:any) {
    setIsLoading(true);
    dispatch(getRandomPackCardBySubject(
      token,
      refreshToken,
      element.subject
    ));
  }
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      redirection(randomPack);
    }
  }, [randomPack]);

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#5EBBB0', '#5D5FEF']}
      style={styles.linearGradient}
    >
      <View
        style={{ flex: 2 }}
      >
        <View
          style={{ flex: 1 }}
        >
          <Text
            style={styles.title}
          >
            DISCOVER

          </Text>
          <Text
            style={styles.subtitle}
          >
            Choose from these categories what interets you the most

          </Text>
        </View>
        <ScrollView
          horizontal
        >
          <View
            style={styles.containerList}
          >
            {filteredPackCard.map((element:any) => (
              <>
                <Pressable
                  key={element._id}
                  style={styles.subjects}
                  onPress={() => {
                    randomHandler(element);
                  }}
                >
                  <Text
                    style={styles.text}
                  >
                    {element.subject}
                  </Text>
                </Pressable>
              </>
            ))}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
