import React from "react";
import { ActivityIndicator } from "react-native";

import { List, ListItem } from "../components/List";

class ListScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <List
        data={this.state.list}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            isOdd={index % 2}
            onPress={() => this.props.navigation.navigate("Details", { item })}
          />
        )}
      />
    );
  }
}

export default ListScreen;
