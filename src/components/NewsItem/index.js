import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import { BasicButton } from '../BasicButton';

export default function NewsItem({ item }) {
  return (
    <View style={styles.container}>
      <Image style={{ height: 150, margin: 5 }} source={{ uri: item.urlToImage }} />
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.readMore}>
        <BasicButton buttonText="Read More" />
      </View>
    </View>
  );
}

NewsItem.propTypes = {};

NewsItem.defaultProps = {};
