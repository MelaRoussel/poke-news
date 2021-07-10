import React from 'react';
import { Button } from 'react-native';

export default function Login({ connectUser }) {
  return <Button title="Login" onPress={() => connectUser({ name: 'Mela', password: 'PokeNews' })} />;
}
