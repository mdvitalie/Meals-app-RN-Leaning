import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable 
      android_ripple={{color: '#ccc'}} 
      style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}      
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles =  StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width:0, height:2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? "hidden" : 'visible',
  },
  button:{
    flex: 1,
  },
  buttonPressed:{
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontWeight: "bold",
    fontSize: 18,
  }
});
