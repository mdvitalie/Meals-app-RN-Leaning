import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.ditalItem}>{duration}m</Text>
            <Text style={styles.ditalItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.ditalItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem:{
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    overflow: "hidden",
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  image:{
    width: '100%',
    height: 200
  },
  title:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  details:{
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center"
  },
  ditalItem: {
    marginHorizontal: 5,
    fontSize: 12
  },
   buttonPressed: {
    opacity: 0.5,
  },
});