import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title="Increase Count"
      />
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title="Decrease Count"
      />
      <Button
        onPress={() => {
          setCounter(0);
        }}
        title="Reset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
