import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const DummyCard = ({title, content}) => {
  return (
    <View style={styles.card}>
      <ScrollView horizontal={true}>
        <Image
          source={require('../assets/images/dish1.png')}
          style={styles.image}
        />

        <Image
          source={require('../assets/images/dish1.png')}
          style={styles.image}
        />

        <Image
          source={require('../assets/images/dish1.png')}
          style={styles.image}
        />
      </ScrollView>
      <Text style={styles.title}>Weight Loss</Text>
      {/* <Text style={styles.content}>Hello Haii...</Text> */}
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
    margin: 5,
    left: 10,
  },
  content: {
    fontSize: 16,
  },
  image: {
    // width: 360
    left: 10,
    marginRight: 10,
  },
});

export default DummyCard;
