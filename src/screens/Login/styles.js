import { StyleSheet } from 'react-native';
import { pokeBlue } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: pokeBlue,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    padding: 5,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  logoWrapper: {
    marginBottom: 50,
  },
});
