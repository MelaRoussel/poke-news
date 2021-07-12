import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { arrayOf, func, number, shape, string } from 'prop-types';

import NewsItem from '../../components/NewsItem';
import styles from './styles';

export default function News({ getAllNews, data, navigation, userName }) {
  useEffect(() => {
    getAllNews();
  }, [data]);

  const renderItem = ({ item }) => <NewsItem navigation={navigation} item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View>
          <Text style={styles.user}>Hi {userName}</Text>
        </View>
        <View style={styles.resultsWrapper}>
          <Text style={styles.results}>Results : </Text>
          <Text>{data.totalResults}</Text>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data.articles}
          renderItem={renderItem}
          initialNumToRender={10}
          keyExtractor={(item, id) => id.toString()}
        />
      </View>
    </View>
  );
}

News.propTypes = {
  navigation: shape({
    navigate: func,
  }).isRequired,
  data: shape({
    totalResults: number,
    status: string,
    articles: arrayOf(
      shape({
        source: shape({ id: string, name: string }),
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string,
      }),
    ),
  }),
};

News.defaultProps = {
  navigation: shape({
    navigate: Function.prototype,
  }),
  data: shape({
    totalResults: null,
    status: null,
    data: null,
  }),
};
