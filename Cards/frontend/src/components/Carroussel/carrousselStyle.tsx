import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const cardW = width * 0.7;
const cardH = cardW * 1.54;
export default StyleSheet.create({
  card: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 30
  },
  inside: {

    backgroundColor: '#272727',
    width: cardW,
    height: cardH,
    borderRadius: 16,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    textAlign: 'center'

  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
