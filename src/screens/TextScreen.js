import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState(" ");

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
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
      />
      {password.length <= 5 ? (
        <Text style={styles.password}>
          Password must be 5 or more characters.
        </Text>
      ) : null}
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
  password: {
    color: "red",
  },
});

export default TextScreen;
