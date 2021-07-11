import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import { Logo } from '../../components/Logo';
import { pokeBlue, pokeYellow } from '../../constants/colors';

import pikaLogo from '../../ressources/pikalogo/pikalogo.png';

export default function Login({ connectUser }) {
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  function onSignIn() {
    connectUser({ name, password });
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo width={300} height={200} sourceImage={pikaLogo} />
      </View>
      <TextInput
        color="black"
        onChangeText={onChangeName}
        placeholder="Name"
        placeholderTextColor="gray"
        style={styles.input}
        value={name}
      />
      <TextInput
        color="black"
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        style={styles.input}
        value={password}
      />
      <BasicButton color={pokeYellow} textColor={pokeBlue} buttonText="sign in" onPress={() => onSignIn()} />
    </View>
  );
}
