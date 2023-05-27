import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealsDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      {/* <Text>Meal Detail Screen ({mealId})</Text> */}
      <Image source={{ uri: seletedMeal.imageUrl }} />
      <Text>{seletedMeal.title}</Text>
      <View>
        <MealDetails
          duration={seletedMeal.duration}
          complexity={seletedMeal.complexity}
          affordability={seletedMeal.affordability}
        />
      </View>
      <Text>Ingredients</Text>
      {seletedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
        ))}
      <Text>Steps</Text>
      {seletedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
        ))}
    </View>
  );
};

export default MealsDetailScreen;
