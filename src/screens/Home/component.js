import React from 'react';
import { View, Text } from 'react-native';

import Login from '../Login';
import News from '../News';
import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import { pokeBlue, pokeYellow } from '../../constants/colors';
import { func, shape, string } from 'prop-types';

export default function Home({ navigation, userName }) {
  if (userName) return <News />;
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Poke User ! </Text>
      <Text style={styles.signInText}>Please sign in to see latest news on Pokemon</Text>
      <BasicButton
        color={pokeYellow}
        textColor={pokeBlue}
        buttonText="sign in"
        onPress={() => navigation.navigate('Login', { name: 'Login' })}
      />
    </View>
  );
}

Home.propTypes = {
  userName: string,
  navigation: shape({
    navigate: func,
  }).isRequired,
};

Home.defaultProps = {
  userName: null,
  navigation: shape({
    navigate: Function.prototype,
  }),
};
