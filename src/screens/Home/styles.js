import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#3367B0',

    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#DADC25',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontSize: 30,
  },
  signInText: {
    fontSize: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#DADC25',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 200,
    height: 50,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3367B0',
    textTransform: 'uppercase',
  },
});
