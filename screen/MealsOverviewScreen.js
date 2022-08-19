import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/mealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItems) => {
    return mealItems.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  return <MealsList items={displayMeals} />;
};

export default MealsOverviewScreen;
