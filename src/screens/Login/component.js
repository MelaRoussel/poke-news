import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { bool, func, shape, string } from 'prop-types';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Logo } from '../../components/Logo';
import { SnackBar } from '../../components/SnackBar';
import { pokeBlue, pokeYellow } from '../../constants/colors';

import pikaLogo from '../../resources/pikalogo/pikalogo.png';

export default function Login({ connectUser, navigation, isLoading, error }) {
  const [name, onChangeName] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo width={300} height={200} sourceImage={pikaLogo} />
      </View>
      {error ? <SnackBar color="#D32F2F" message="Wrong password or name, please try again" /> : null}
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
      <BasicButton
        color={pokeYellow}
        textColor={pokeBlue}
        buttonText="sign in"
        isLoading={isLoading}
        onPress={() =>
          connectUser({ name, password, navigateTo: () => navigation.navigate('Home', { name: 'News' }) })
        }
      />
    </KeyboardAwareScrollView>
  );
}

Login.propTypes = {
  connectUser: func,
  navigation: shape({
    navigate: func,
  }).isRequired,
  isLoading: bool,
  error: string,
};

Login.defaultProps = {
  connectUser: Function.prototype,
  navigation: shape({
    navigate: Function.prototype,
  }),
  isLoading: false,
  error: null,
};
