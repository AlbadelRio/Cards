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

    width: '100%',
    height: 300,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'

  },
  subjects: {
    marginTop: 8,
    padding: 10,
    width: 110,
    height: 40,
    backgroundColor: '#222222',
    color: '#c5c5c5',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  bar: {
    width: '100%',
    height: 50,
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  texBar: {
    margin: 15,
    color: '#c5c5c5',
    fontWeight: 'bold'
  }
});
