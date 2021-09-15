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
  },
  filteredPackCard: {
    width: 350,
    height: 90,
    backgroundColor: 'white',
    margin: 10,
    textAlign: 'left',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between'

  },
  add: {
    width: 40,
    height: 40
  },
  addContainer: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  info: {
    justifyContent: 'center',
    marginLeft: 25
  },
  text: {
    fontWeight: 'bold'
  }

});
