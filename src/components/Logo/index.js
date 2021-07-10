import React from 'react';
import { Image, View } from 'react-native';

import pokeNewsLogo from '../../ressources/logo/pokenews-logo.png';

export function Logo() {
  return (
    <View>
      <Image style={{ width: 200, height: 50, resizeMode: 'contain' }} source={pokeNewsLogo} />
    </View>
  );
}
