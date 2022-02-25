import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hello, Cameron!</Text>
      <Button
        onPress={() => {
          console.log("Button pressed");
          props.navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
          console.log("Touchable Opacity pressed");
        }}
      >
        <Text>Go to Lists Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
