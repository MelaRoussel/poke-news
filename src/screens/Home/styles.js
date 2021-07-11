import { StyleSheet } from 'react-native';
import { pokeBlue, pokeYellow } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: pokeBlue,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: pokeYellow,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontSize: 30,
  },
  signInText: {
    fontSize: 15,
    color: '#fff',
  },
});
