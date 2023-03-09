import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({title, content}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{category.name}</Text>
      <Image source={{uri: category.image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default Card;
