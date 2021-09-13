import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 50,
    color: '#222222',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40
  },
  subtitle: {
    color: '#222222',
    textAlign: 'center'

  },
  containerList: {

    width: 510,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'

  },
  subjects: {
    margin: 8,
    padding: 10,
    width: 110,
    height: 40,
    backgroundColor: '#222222',
    elevation: 8
  },

  text: {
    textAlign: 'center',
    color: '#c5c5c5',
    fontWeight: 'bold'
  }
});
