import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "red" }}>
    <Button title="Details" onPress={() => navigation.navigate("Details")} />
  </View>
);
