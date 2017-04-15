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

export default class CustomImage extends Component {
  constructor() {
    super();
  }
  render() {
    let icon = this.props.icon;
    if (!this.props.loading) {
      switch (icon) {
        case "clear-day":
          return (
            <Image
              source={require("./md-weather-iconset/weather-clear-day.png")}
            />
          );
        case "clear-night":
          return (
            <Image
              source={require("./md-weather-iconset/weather-clear-night.png")}
            />
          );
        case "partly-cloudy-day":
          return (
            <Image
              source={require("./md-weather-iconset/weather-partly-cloudy-day.png")}
            />
          );
        case "partly-cloudy-night":
          return (
            <Image
              source={require("./md-weather-iconset/weather-partly-cloudy-night.png")}
            />
          );
        case "rain":
          return (
            <Image source={require("./md-weather-iconset/weather-rain-day.png")} />
          );
        case "snow":
          return (
            <Image source={require("./md-weather-iconset/weather-snow.png")} />
          );
        case "sleet":
          return (
            <Image
              source={require("./md-weather-iconset/weather-snow-rain.png")}
            />
          );
        case "wind":
          return (
            <Image source={require("./md-weather-iconset/weather-wind.png")} />
          );
        case "fog":
          return (
            <Image source={require("./md-weather-iconset/weather-fog.png")} />
          );
        case "cloudy":
          return (
            <Image
              source={require("./md-weather-iconset/weather-few-clouds.png")}
            />
          );
        case "hail":
          return (
            <Image source={require("./md-weather-iconset/weather-hail.png")} />
          );
        case "thunderstorm":
          return (
            <Image source={require("./md-weather-iconset/weather-storm.png")} />
          );
        case "tornado":
          return (
            <Image
              source={require("./md-weather-iconset/weather-partly-cloudy-day.png")}
            />
          );
      }
    }
    return <Spinner />;
  }
}
