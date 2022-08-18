import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    color: "#e7bc91",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
