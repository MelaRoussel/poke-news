import Moment from 'moment';
import React from 'react';
import { Image, ScrollView, Text, Linking } from 'react-native';

import styles from './styles';
import { BasicButton } from '../../components/BasicButton';

const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
};

export default function Article({ route }) {
  const { item } = route.params;
  if (!item) return null;

  const { author, content, description, publishedAt, source, title, url, urlToImage } = item;
  const formattedDate = Moment(publishedAt).format('LLLL');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Image style={styles.articleImage} source={{ uri: urlToImage }} />
      <Text style={styles.dateAndAuthor}>Published {formattedDate}</Text>
      {author && <Text style={styles.dateAndAuthor}>By {author}</Text>}
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>
      {source && <Text style={styles.dateAndAuthor}>source: {source.name}</Text>}
      <BasicButton buttonText="go to article page" onPress={() => openURL(url)} />
    </ScrollView>
  );
}

Article.propTypes = {};

Article.defaultProps = {};
