import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { BasicButton } from '../BasicButton';

export default function NewsItem({ navigation, item }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Article', { item })} style={styles.container}>
      <Image style={{ height: 150, margin: 5 }} source={{ uri: item.urlToImage }} />
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.readMore}>
        <BasicButton buttonText="Read More" onPress={() => navigation.navigate('Article', { item })} />
      </View>
    </TouchableOpacity>
  );
}

NewsItem.propTypes = {};

NewsItem.defaultProps = {};
