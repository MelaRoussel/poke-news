import React from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';
import styles from './styles';

export function SnackBar({ color, message }) {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

SnackBar.propTypes = {
  color: string,
  message: string,
};

SnackBar.defaultProps = {
  color: null,
  message: null,
};
