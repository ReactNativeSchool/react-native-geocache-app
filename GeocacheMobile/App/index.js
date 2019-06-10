import React from "react";
import { Button } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import List from "./screens/List";
import Map from "./screens/Map";
import Details from "./screens/Details";

const ListSwitch = createSwitchNavigator({
  List: {
    screen: List
  },
  Map: {
    screen: Map
  }
});

const ListToggleButton = ({ navigation }) => {
  if (navigation.state.index === 0) {
    return (
      <Button
        title="Map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
    );
  }

  return (
    <Button
      title="List"
      onPress={() => {
        navigation.navigate("List");
      }}
    />
  );
};

const App = createStackNavigator({
  List: {
    screen: ListSwitch,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Caches",
      headerRight: <ListToggleButton navigation={navigation} />
    })
  },

  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

export default createAppContainer(App);
