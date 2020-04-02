import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createCompatNavigatorFactory } from "@react-navigation/compat";

import List from "./screens/List";
import Details from "./screens/Details";

import { AddButton } from "./components/Navigation";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: "#3A8552"
  },
  headerTintColor: "#fff"
};

const Information = createCompatNavigatorFactory(createStackNavigator)(
  {
    List: {
      screen: List,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Caches",
        headerRight: () => <AddButton navigation={navigation} />
      })
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam("item", {}).title
      })
    }
  },
  {
    defaultNavigationOptions: {
      ...defaultStackOptions
    }
  }
);

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <Information />
  </NavigationContainer>
);
