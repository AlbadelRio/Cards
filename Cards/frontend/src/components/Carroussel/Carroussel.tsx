import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
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
  // const { token, refreshToken } = useSelector((store:any) => store.tokensReducer);
  const cardW = width * 0.7;
  const cardH = cardW * 1.54;
  const totalNumberOfQuestions = pack.packCards.length;
  return (
    <View style={{ flex: 1, backgroundColor: '#5EBBB0' }}>
      <StatusBar hidden />
      <FlatList
        data={pack.packCards}
        horizontal
        pagingEnabled
        // keyExtractor={(index:any) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 20
            }}
            key={index.toString()}
          >
            <View style={{
              backgroundColor: '#272727',
              width: cardW,
              height: cardH,
              borderRadius: 16,
              elevation: 2
            }}
            >
              <Text style={{ color: 'white' }}>Question</Text>
              <Text style={{ color: 'white' }}>
                {index + 1}
                /
                {totalNumberOfQuestions}
              </Text>
              <Text style={{ color: 'white' }}>{item.question}</Text>
              <Text style={{ color: 'white' }}>Tap to Flip</Text>
            </View>

          </TouchableOpacity>

        )}
      />
    </View>
  );
}
