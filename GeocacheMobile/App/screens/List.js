import React from "react";
import { ActivityIndicator } from "react-native";

import { geoFetch } from "../util/api";
import { List } from "../components/List";

class ListScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    geoFetch("/list")
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
        onItemPress={item =>
          this.props.navigation.navigate("Details", { item })
        }
      />
    );
  }
}

export default ListScreen;
