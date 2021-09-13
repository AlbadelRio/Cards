import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#D5D5D5',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#272727',
    margin: 40
  },
  searchContainer: {
    flex: 1,
    alignItems: 'center'
  },
  searchBox: {
    width: 300,
    height: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
    borderRadius: 6,
    padding: 6
  }
});
