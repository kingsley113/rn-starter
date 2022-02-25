import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello, Cameron!</Text>
      <Button
        onPress={() => console.log("Button pressed")}
        title="Go to Components Demo"
      />
      <TouchableOpacity
        onPress={() => console.log("Touchable Opacity pressed")}
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
