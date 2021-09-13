import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d5d5d5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollBackground: {
    width: '75%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 10
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#272727'
  },
  tinyLogo: {
    width: 45,
    height: 45
  },
  tinyDelete: {
    width: 15,
    height: 15
  },
  linearGradient: {
    width: 45,
    height: 45,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7
  },
  items: {
    width: 300,
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  info: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#272727'
  },
  cards: {
    width: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#272727'
  },
  linearGradientButton: {
    width: 90,
    height: 50,
    borderRadius: 4,
    elevation: 7,
    marginTop: 20
  },
  add: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 12,
    color: '#272727'
  },
  button: {
    flex: 1,
    alignItems: 'flex-end'
  }
});
