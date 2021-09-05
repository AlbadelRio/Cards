/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  View, Text, Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPackcards } from '../../redux/actions/packCardsActionCreators';

/* type PackCard = {
  _id:string,
  title: string,
  image: string,
  subject: string,
  public: boolean,
  user: Array<{}>,
  packCards: Array<{}>
} */

export default function Discover({ navigation }:any) {
  const nextHandler = () => { navigation.navigate('Search'); };
  const SkipHandler = () => { navigation.navigate('Cards'); };
  const packCards = useSelector((store:any) => store.packCards);
  const dispatch = useDispatch();
  console.log(packCards);
  useEffect(() => {
    dispatch(loadPackcards());
  }, []);

  return (

    <View>
      <Text>Discover</Text>
      <Text>Choose from these categories what interets you the most</Text>

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
