import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  rowText: {
    color: "#717171",
    fontSize: 16
  },
  sep: {
    height: 1,
    backgroundColor: "#ccc",
    flex: 1,
    marginLeft: 10
  }
});

export const List = ({ onItemPress, ...props }) => (
  <FlatList
    {...props}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => onItemPress(item)} style={styles.row}>
        <Text style={styles.rowText}>{item.title}</Text>
      </TouchableOpacity>
    )}
    ItemSeparatorComponent={() => <View style={styles.sep} />}
  />
);
