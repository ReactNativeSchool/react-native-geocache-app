import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import List from "./screens/List";
import Details from "./screens/Details";

import { AddButton } from "./components/Navigation";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: "#3A8552"
  },
  headerTintColor: "#fff"
};

const Information = createStackNavigator(
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

const AppWithContainer = createAppContainer(Information);

export default () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <AppWithContainer />
  </React.Fragment>
);
