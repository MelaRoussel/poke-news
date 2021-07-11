import { StyleSheet } from 'react-native';
import { pokeBlue } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  information: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  results: {
    color: pokeBlue,
    fontWeight: 'bold',
  },
  resultsWrapper: {
    flexDirection: 'row',
  },
  user: {
    color: pokeBlue,
    fontWeight: 'bold',
  },
});
