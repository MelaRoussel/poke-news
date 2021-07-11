import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

export function BasicButton({ onPress, color, buttonText, textColor }) {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
      <Text style={{ ...styles.buttonText, color: textColor }}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
