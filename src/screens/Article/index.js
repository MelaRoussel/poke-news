import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';
import Moment from 'moment';

export default function Article({ route }) {
  const { item } = route.params;
  const formattedDate = Moment(item.publishedAt).format('LLLL');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Image style={styles.articleImage} source={{ uri: item.urlToImage }} />
      <Text style={styles.dateAndAuthor}>Pubished {formattedDate}</Text>
      <Text style={styles.dateAndAuthor}>By {item.author}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.dateAndAuthor}>source: {item.source.name}</Text>
      <BasicButton buttonText="go to article page" />
    </ScrollView>
  );
}

Article.propTypes = {};

Article.defaultProps = {};
