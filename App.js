import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
              headerTintColor: '#fff',
              contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ 
              title: "All Categories",
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverViewScreen} 
           // options={({route, navigation}) => {
            //  const catId = route.params.categoryId;
            //  return{
            //    title: catId,
            //  }
            //}} 
          />
          <Stack.Screen name= "MealDetail" component={MealsDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
