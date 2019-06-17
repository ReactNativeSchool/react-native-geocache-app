import { Alert } from "react-native";

const BASE_URL = "http://localhost:3000";

export const geoFetch = (path, options = {}) =>
  fetch(`${BASE_URL}/api${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something went wrong... Please try again.");
    })
    .catch(error => {
      Alert.alert("An Error Occurred", error.message);

      throw new Error(error.message);
    });
