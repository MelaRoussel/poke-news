import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

import styles from './styles';
import { pokeBlue, pokeYellow } from '../../constants/colors';

export function BasicButton({ onPress, color, buttonText, textColor, isLoading }) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={pokeBlue} />
      ) : (
        <Text style={{ ...styles.buttonText, color: textColor }}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
}

BasicButton.propTypes = {
  onPress: func,
  color: string,
  buttonText: string,
  textColor: string,
};

BasicButton.defaultProps = {
  onPress: Function.prototype,
  color: pokeYellow,
  buttonText: null,
  textColor: pokeBlue,
};
