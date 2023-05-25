import { View, FlatList, Text, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />
  }

  return (
    <View style={styles.container}>
      {/* <Text>Meals Over View Screen - {catId}</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
