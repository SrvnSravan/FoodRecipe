import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import Card from '../components/card';
import MealPlanScreen from '../screens/meal-plan-screen';

const HomeScreen = () => {
  const [mealCategories, setMealCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);


  useEffect(() => {
    fetch('http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories') //fetching the Api
    .then(response => response.json())
    .then(data => setMealCategories(data.data.meal_categories))
    .catch(error => console.log(error));
  }, []);

  const handleCategoryPress = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const renderCategoryItem = ({item}) => ( // render each meal category as a card
    <View>
      <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={mealCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategoryItem}
      />
      {selectedCategoryId && (
        <MealPlanScreen categoryId={selectedCategoryId} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  image: {
    height: 190,
    width: 380,
    left: 5,
    top: 10,
    borderRadius: 10
  },
  text: {
    right: 195,
    margin: 10,
    color: "#000000"
  },
});
