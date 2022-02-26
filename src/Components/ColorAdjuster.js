import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const ColorAdjuster = ({ onIncrease, onDecrease, colorLabel }) => {
  return (
    <View>
      <Text>{colorLabel}</Text>
      <Button title={`More ${colorLabel}`} onPress={() => onIncrease()} />
      <Button title={`Less ${colorLabel}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
