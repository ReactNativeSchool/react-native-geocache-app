import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createCompatNavigatorFactory } from "@react-navigation/compat";

import List from "./screens/List";
import Details from "./screens/Details";
import CreateCache from "./screens/CreateCache";

import { AddButton, CloseButton } from "./components/Navigation";

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

const App = createCompatNavigatorFactory(createStackNavigator)(
  {
    Information,
    CreateCache: {
      screen: createCompatNavigatorFactory(createStackNavigator)(
        {
          CreateCreate: {
            screen: CreateCache,
            navigationOptions: ({ navigation }) => ({
              headerTitle: "Create Cache",
              headerRight: <CloseButton navigation={navigation} />
            })
          }
        },
        {
          defaultNavigationOptions: {
            ...defaultStackOptions
          }
        }
      )
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <App />
  </NavigationContainer>
);
