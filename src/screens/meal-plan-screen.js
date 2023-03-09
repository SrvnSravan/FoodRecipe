import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Card from '../components/card'; // import Card component

const MealPlanScreen = ({categoryId}) => {
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    fetch(`http://proteinium.iroidtechnologies.in/api/v1/get-mealplans`)
      .then(response => response.json())
      .then(data => setMealPlans(data.data.meal_plans))
      console.log(data.data.meal_plans)
      .catch(error => console.log(error));
  }, [categoryId]);

  const renderPlanItem = ({item}) => (
    <Card title={item.name} description={item.description} image={item.image} />
  );

  return (
    <FlatList
      data={mealPlans}
      keyExtractor={item => item.id.toString()}
      renderItem={renderPlanItem}
    />
  );
};

export default MealPlanScreen;
