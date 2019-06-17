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
  buttonLoading: {
    backgroundColor: "#9CC2A8"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff"
  }
});

export const Button = ({ text, onPress, loading = false, style = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, loading && styles.buttonLoading, style]}
    disabled={loading}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
