import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.ditalItem}>{duration}m</Text>
      <Text style={styles.ditalItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.ditalItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  ditalItem: {
    marginHorizontal: 5,
    fontSize: 12,
  },
});
