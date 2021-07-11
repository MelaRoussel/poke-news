import React from 'react';
import { View, Text } from 'react-native';

import Login from '../Login';
import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import { pokeBlue, pokeYellow } from '../../constants/colors';

export default function Home({ navigation }) {
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
