import React from "react";
import { TouchableOpacity, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const iconPrefix = Platform.OS === "ios" ? "ios" : "md";

const styles = StyleSheet.create({
  btnRight: {
    marginRight: 10
  }
});

export const AddButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("CreateCache")}
    style={styles.btnRight}
    activeOpacity={0.75}
  >
    <Ionicons name={`${iconPrefix}-add`} size={30} color="#fff" />
  </TouchableOpacity>
);

export const CloseButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.pop()}
    style={styles.btnRight}
    activeOpacity={0.75}
  >
    <Ionicons name={`${iconPrefix}-close`} size={30} color="#fff" />
  </TouchableOpacity>
);
