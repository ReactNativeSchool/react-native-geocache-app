import React from "react";
import { ScrollView, View } from "react-native";

import { TextField } from "../components/Form";
import { Button } from "../components/Button";
import { geoFetch } from '../util/api';

class CreateCache extends React.Component {
  state = {
    title: null,
    description: null,
    latitude: null,
    longitude: null,
    loading: false
  };

  onCurrentLocationPress = () => {
    navigator.geolocation.getCurrentPosition(res => {
      if (res && res.coords) {
        this.setState({
          latitude: res.coords.latitude.toString(),
          longitude: res.coords.longitude.toString()
        })
      }
    });
  };

  onSavePress = () => {
    const { title, description, latitude, longitude } = this.state;
    this.setState({ loading: true }, () => {
      geoFetch(`/geocache`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, latitude, longitude })
      })
      .then(() => {
        this.props.navigation.popToTop();
      })
      .catch(error => {
        console.log('create cache error', error);
      })
      .finally(() => {
        this.setState({ loading: false });
      })
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <TextField
          label="Title"
          placeholder="I am what I am..."
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <TextField
          label="Description"
          placeholder="This is a description..."
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <TextField
          label="Latitude"
          placeholder="37.3861"
          keyboardType="decimal-pad"
          value={this.state.latitude}
          onChangeText={latitude => this.setState({ latitude })}
        />
        <TextField
          label="Longitude"
          placeholder="-122.0839"
          keyboardType="decimal-pad"
          value={this.state.longitude}
          onChangeText={longitude => this.setState({ longitude })}
        />
        <View style={{ alignItems: "center" }}>
          <Button
            text="Use Current Location"
            style={{ marginBottom: 20 }}
            onPress={this.onCurrentLocationPress}
          />
          <Button
            text="Save"
            onPress={this.onSavePress}
            loading={this.state.loading}
          />
        </View>
      </ScrollView>
    );
  }
}

export default CreateCache;
