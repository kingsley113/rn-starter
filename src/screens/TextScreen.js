import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState(" ");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
      />
      <Text>Hello, my name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 30,
  },
});

export default TextScreen;
