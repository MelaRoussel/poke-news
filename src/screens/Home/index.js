import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Login from '../Login';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Poke User ! </Text>
      <Text style={styles.signInText}>Please sign in to see latest news on Pokemon</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login', { name: 'Login' })}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
