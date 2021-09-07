import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  component: {
    height: '100%',
    backgroundColor: '#222222'
  },
  title: {
    fontSize: 60,
    color: '#E5E5E5',
    textAlign: 'center',
    marginTop: 180,
    fontWeight: 'bold'
  },
  container: {
    marginTop: 85,
    height: 300,
    alignSelf: 'center'
  },
  email: {
    width: 300,
    height: 50,
    padding: 30,
    margin: 5,
    backgroundColor: '#DCDCDC',
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5

  },
  button: {
    width: 300,
    padding: 25,
    height: 70,
    marginTop: 50,
    backgroundColor: '#5EBBB0',
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    color: '#222222',
    textAlign: 'center'
  },
  pressableText: {
    fontSize: 14,
    color: '#E5E5E5',
    marginTop: 60,
    marginBottom: 20,
    marginRight: 30,
    textAlign: 'right'
  }
});
