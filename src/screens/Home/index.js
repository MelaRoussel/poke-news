import React from 'react';
import { View, Text } from 'react-native';
import Login from '../Login';

export default function Home() {
  return (
    <View>
      <View>
        <Text>Welcome Poke User ! </Text>
        <Text>Please sign in to see latest news on Pokemon</Text>
      </View>
      <Login />
    </View>
  );
}
