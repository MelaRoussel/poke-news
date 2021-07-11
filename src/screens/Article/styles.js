import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  articleImage: {
    width: '100%',
    height: 200,
  },
  dateAndAuthor: {
    color: 'grey',
  },
  articleTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  description: {
    flexShrink: 1,
    fontSize: 15,
    marginVertical: 10,
    fontStyle: 'italic',
  },
  content: {
    flexShrink: 1,
    fontSize: 18,
    marginVertical: 10,
  },
});
