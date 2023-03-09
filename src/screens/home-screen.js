import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import Card from '../components/card';

const HomeScreen = () => {
  const [mealCategories, setMealCategories] = useState([]);

  useEffect(() => {
    fetch('http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories')
      .then(response => response.json())
      .then(data => {
        setMealCategories(data.categories);
        console.log(setMealCategories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Card title={item.title} content={item.content} />
  );

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={mealCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
