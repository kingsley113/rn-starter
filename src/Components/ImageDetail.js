import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageDetail = ({ title }) => {
  return (
    <View>
      <Text>{title} Image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});
export default ImageDetail;
