import React from 'react';
import { Image, View } from 'react-native';

export function Logo({ width, height, sourceImage }) {
  return (
    <View>
      <Image style={{ width, height, resizeMode: 'contain' }} source={sourceImage} />
    </View>
  );
}
