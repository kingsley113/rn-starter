import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello, Cameron!</Text>
      <Button
        onPress={() => {
          console.log("Button pressed");
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to Lists Demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Images Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("Colors")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("CustomColor")}
        title="Go to Custom Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Screen"
      />

      {/* Touchable Opacity is much more customizable for buttons, can use any element inside  */}
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
          console.log("Touchable Opacity pressed");
        }}
      >
        <Text>Go to Lists Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
