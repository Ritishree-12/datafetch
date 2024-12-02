import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetails = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.userId}>User ID: {post.userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
  },
  userId: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default PostDetails;
