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
  delete: {
    width: 45,
    height: 45,
    backgroundColor: '#5EBBB0',
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
  add: {
    width: 80,
    height: 40,
    backgroundColor: '#5EBBB0',
    borderRadius: 3,
    elevation: 7,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
    color: '#272727',
    marginTop: 20

  },
  button: {
    flex: 1,
    alignItems: 'flex-end'
  }
});
