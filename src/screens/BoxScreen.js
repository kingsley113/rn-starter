import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "space-between",
    height: 200,
    flexDirection: "row",
    // alignItems: '',
  },
  viewOneStyle: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    // flex: 4,
  },
  viewTwoStyle: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: "red",
    top: 80,
    backgroundColor: "green",

    // flex: 4,
    // alignSelf: "flex-end",
    // ...StyleSheet.absoluteFillObject,
    // top: 10,
  },
  viewThreeStyle: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "blue",

    // flex: 2,
    // right: 10,
    // alignSelf: "flex-start",
  },
});

export default BoxScreen;
