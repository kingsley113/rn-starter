import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, counter: state.counter + 1 };
    case "decrease_count":
      return { ...state, counter: state.counter - 1 };
    case "reset_count":
      return { ...state, counter: 0 };
    default:
      return;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button
        onPress={() => {
          dispatch({ type: "increase_count" });
        }}
        title="Increase Count"
      />
      <Button
        onPress={() => {
          dispatch({ type: "decrease_count" });
        }}
        title="Decrease Count"
      />
      <Button
        onPress={() => {
          dispatch({ type: "reset_count" });
        }}
        title="Reset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
