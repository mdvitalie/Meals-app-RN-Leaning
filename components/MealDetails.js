import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.ditalItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.ditalItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.ditalItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
