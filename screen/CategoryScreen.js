import { FlatList, StyleSheet } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("Meals Overview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
