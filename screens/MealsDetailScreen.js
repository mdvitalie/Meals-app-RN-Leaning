import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {  useLayoutEffect } from "react";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {addFavorite, removeFavorite} from '../store/redux/favorites'
// import { FavoritesContext } from "../store/context/favorites-context";

const MealsDetailScreen = ({ route, navigation }) => {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  //const favoriteMealsIds =  useSelector((state) => state.favoriteMeals.ids);
  const favoriteMealIds =  useSelector((state) => state.favoriteMeals.ids);
  const dispatch =useDispatch();
  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

  //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite){
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    }else{
     //favoriteMealsCtx.addFavorite(mealId);
     dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : 'star-outline'}
            color="#fff"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      {/* <Text>Meal Detail Screen ({mealId})</Text> */}
      <Image style={styles.image} source={{ uri: seletedMeal.imageUrl }} />
      <Text style={styles.title}>{seletedMeal.title}</Text>
      <View>
        <MealDetails
          duration={seletedMeal.duration}
          complexity={seletedMeal.complexity}
          affordability={seletedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={seletedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={seletedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
