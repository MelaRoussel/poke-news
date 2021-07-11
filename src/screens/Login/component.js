import React from 'react';
import { TextInput, View } from 'react-native';
import { func, shape } from 'prop-types';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import { Logo } from '../../components/Logo';
import { pokeBlue, pokeYellow } from '../../constants/colors';

import pikaLogo from '../../ressources/pikalogo/pikalogo.png';

export default function Login({ connectUser, navigation }) {
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');

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
      <BasicButton
        color={pokeYellow}
        textColor={pokeBlue}
        buttonText="sign in"
        onPress={() =>
          connectUser({ name, password, navigateTo: () => navigation.navigate('Home', { name: 'News' }) })
        }
      />
    </View>
  );
}

Login.propTypes = {
  connectUser: func,
  navigation: shape({
    navigate: func,
  }).isRequired,
};

Login.defaultProps = {
  connectUser: Function.prototype,
  navigation: shape({
    navigate: Function.prototype,
  }),
};
