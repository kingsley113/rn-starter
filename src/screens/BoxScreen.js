import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Oopsie Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    // alignItems: "center",
    // flexDirection: "row",
    justifyContent: "space-around",
    height: 200,
  },
  textStyle: {
    borderWidth: 5,
    borderColor: "red",
    // margin: 20,
    // textAlign: "center",
  },
});

export default BoxScreen;
