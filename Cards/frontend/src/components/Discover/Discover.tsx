/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  View, Text, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';
import styles from './discoverStlyles';

export default function Discover({ navigation }:any) {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const packCards = useSelector((store:any) => store.packardsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);

  const nextHandler = () => { navigation.navigate('Search'); };
  const SkipHandler = () => { navigation.navigate('Cards'); };

  return (

    <View>
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

      <View
        style={styles.containerList}
      >
        {packCards.map((element:any) => (
          <Text key={element._id}>
            {element.subject}
          </Text>
        ))}

      </View>
      <Pressable
        onPress={SkipHandler}
      >
        <Text>
          SKIP

        </Text>
      </Pressable>
      <Pressable
        onPress={nextHandler}
      >
        <Text>
          NEXT

        </Text>
      </Pressable>
    </View>
  );
}
