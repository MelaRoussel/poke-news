import { StyleSheet } from 'react-native';
import { pokeYellow } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    borderBottomRightRadius: 20,
    borderColor: pokeYellow,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    display: 'flex',
    flex: 1,
    margin: 15,
    padding: 5,
  },
  articleTitle: {
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    flexShrink: 1,
    fontSize: 15,
  },
  readMore: {
    alignItems: 'center',
  },
});
