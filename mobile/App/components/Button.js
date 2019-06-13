import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3A8552",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 45,
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff"
  }
});

export const Button = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
