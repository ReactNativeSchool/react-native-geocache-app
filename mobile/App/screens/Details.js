import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";

import { Button } from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  section: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    marginVertical: 20,
    padding: 14,
    alignItems: "center"
  },
  titleText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#4A4A4A",
    textAlign: "center",
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 20
  }
});

class Details extends React.Component {
  state = {
    loading: false,
    updatedItem: null
  };

  handleLogPress = () => {
    alert("todo!");
  };

  render() {
    const item = this.state.updatedItem
      ? this.state.updatedItem
      : this.props.navigation.getParam("item", {});

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>
              {`Found ${item.foundCount || 0} times.`}
            </Text>
            <Button
              text="Log"
              onPress={this.handleLogPress}
              loading={this.state.loading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Details;
