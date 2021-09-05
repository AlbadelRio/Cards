import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#222222',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40
  },
  subtitle: {
    color: '#222222',
    textAlign: 'center',
    marginTop: 20
  },
  containerList: {

    marginTop:5,
    width: 500,
    height: 300,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignContent: 'space-between',
    flexWrap: 'wrap'

  },
  subjects: {
    margin: 8,
    padding: 10,
    width: 110,
    height: 40,
    backgroundColor: '#222222',
    color: '#c5c5c5',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap'
  }
});
