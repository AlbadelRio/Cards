/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  View, Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';
import styles from './discoverStlyles';

export default function Discover() {
  const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const packCards = useSelector((store:any) => store.packardsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPackcards(token, refreshToken));
  }, []);

  const filteredPackCard = Array.from(new Set(packCards.map((packCard:any) => packCard.subject)))
    .map((subject) => ({
      subject
    }));

  return (

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
      <View
        style={styles.containerList}
      >
        {filteredPackCard.map((element:any) => (
          <Text
            key={element._id}
            style={styles.subjects}

          >
            {element.subject}
          </Text>
        ))}

      </View>
    </View>
  );
}
