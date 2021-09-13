import * as React from 'react';
import { useState } from 'react';

import {
  FlatList,
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('screen');

export default function Carroussel({ route: { params } }:any) {
  const { pack } = params;

  const cardW = width * 0.7;
  const cardH = cardW * 1.54;
  const [showAnswer, setShowAnswer] = useState(false);
  function flipHandler() {
    if (showAnswer) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  }

  return (

    <View style={{ flex: 1, backgroundColor: '#5EBBB0' }}>
      <StatusBar hidden />
      <FlatList
        data={pack?.packCards}
        horizontal
        pagingEnabled
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 20
            }}
            key={index.toString()}
            onPress={flipHandler}
          >
            <View style={{
              backgroundColor: '#272727',
              width: cardW,
              height: cardH,
              borderRadius: 16,
              elevation: 2
            }}
            >
              { !showAnswer && (
              <>
                <Text style={{ color: 'white' }}>Question</Text>
                <Text style={{ color: 'white' }}>
                  {index + 1}
                </Text>
                <Text style={{ color: 'white' }}>{item?.question}</Text>
              </>
              )}
              {showAnswer && (
              <>
                <Text style={{ color: 'white' }}>Answer</Text>
                <Text style={{ color: 'white' }}>{item?.answer}</Text>
              </>
              )}
              <Text style={{ color: 'white' }}>Tap to Flip</Text>
            </View>

          </TouchableOpacity>

        )}
      />
    </View>
  );
}
