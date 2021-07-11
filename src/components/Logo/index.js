import React from 'react';
import { Image, View } from 'react-native';
import { number, string } from 'prop-types';

export function Logo({ width, height, sourceImage }) {
  return (
    <View>
      <Image style={{ width, height, resizeMode: 'contain' }} source={sourceImage} />
    </View>
  );
}

Logo.propTypes = {
  sourceImage: string,
  width: number,
  height: number,
};

Logo.defaultProps = {
  sourceImage: null,
  width: null,
  height: null,
};
