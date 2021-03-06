/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  FlatList,
  StatusBar,
  View,
  Text,
  Pressable
} from 'react-native';

import styles from './carrousselStyle';

export default function Carroussel({ route: { params } }:any) {
  const { pack } = params;

  const [showAnswer, setShowAnswer] = useState(false);
  function flipHandler() {
    if (showAnswer) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#5EBBB0', '#5D5FEF']}
      style={styles.linearGradient}
    >
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <FlatList
          data={pack?.packCards}
          horizontal
          pagingEnabled
          renderItem={({ item, index }) => (
            <Pressable
              testID={`pressable${index}`}
              style={styles.card}
              key={index.toString()}
              onPress={flipHandler}
            >
              <View style={styles.inside}>
                { !showAnswer && (
                <>
                  <Text style={styles.text}>Question</Text>
                  <Text style={styles.text}>{item?.question}</Text>
                </>
                )}
                {showAnswer && (
                <>
                  <Text testID="answer" style={styles.text}>Answer</Text>
                  <Text style={styles.text}>{item?.answer}</Text>
                </>
                )}
                <Text style={styles.text}>Tap to Flip</Text>
              </View>

            </Pressable>

          )}
        />
      </View>
    </LinearGradient>
  );
}
