import React from "react";
import { ActivityIndicator } from "react-native";

import { geoFetch } from "../util/api";
import { List, ListItem } from "../components/List";

class ListScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    geoFetch("/geocache/list")
      .then(response => {
        this.setState({
          loading: false,
          list: response.result
        });
      })
      .catch(err => {
        console.log("err", err);
        alert(err.message);
      });
  }

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
