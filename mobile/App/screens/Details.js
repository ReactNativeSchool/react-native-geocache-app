import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  InteractionManager
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import { Button } from "../components/Button";

const screen = Dimensions.get("window");
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
  map: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    width: screen.width,
    height: Math.round(screen.height * 0.25)
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
    showMap: false
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        showMap: true
      });
    });
  }

  handleLogPress = () => {
    alert("todo");
  };

  render() {
    const item = this.props.navigation.getParam("item", {});

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.state.showMap ? (
            <MapView
              style={styles.map}
              region={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              zoomEnabled={false}
              scrollEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
              />
            </MapView>
          ) : (
            <View style={styles.map} />
          )}

          <View style={styles.section}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Button text="Log" onPress={this.handleLogPress} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Details;
