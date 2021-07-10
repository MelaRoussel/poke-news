import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#3367B0',
    justifyContent: 'flex-start',
    fontSize: 30,
  },
  signInText: {
    fontSize: 15,
  },
  button: {
    backgroundColor: '#3367B0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 200,
    height: 50,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFF',
    textTransform: 'uppercase',
  },
});
