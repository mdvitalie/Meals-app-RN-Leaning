import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

const MealsList = ({items}) => {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    // return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      {/* <Text>Meals Over View Screen - {catId}</Text> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});