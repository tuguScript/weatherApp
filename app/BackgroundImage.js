import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { Button, Container, Content, Spinner, Body } from "native-base";

export default class BackgroundImage extends Component {
  constructor() {
    super();
  }
  render() {
    let d = new Date();
    let hour = d.getHours();
    if (hour >= 7 && hour < 12) {
      return (
        <Image
          source={require("./img/background-morning.png")}
          style={styles.backgroundImage}
        >
          {this.props.children}
        </Image>
      );
    } else if (hour > 12 && hour < 20) {
      return (
        <Image
          source={require("./img/background-evening.png")}
          style={styles.backgroundImage}
        >
          {this.props.children}
        </Image>
      );
    } else {
      return (
        <Image
          source={require("./img/background-night.png")}
          style={styles.backgroundImage}
        >
          {this.props.children}
        </Image>
      );
    }
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
};
