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

import { Button, Container, Content, Spinner, Body, H1 } from "native-base";
import CustomImage from "./CustomImage.js";
import BackgroundImage from "./BackgroundImage.js";
import Quote from "./Quote.js";

export default class weatherApp extends Component {
  constructor() {
    super();
    this.changeUnit = this.changeUnit.bind(this);
  }
  state = {
    loading: true,
    unit: "F"
  };

  componentWillMount = async () => {
    try {
      const response = await fetch("https://api.ipify.org/?format=json");
      const res = await response.json();
      const ip = res.ip;
      var url = "hayg" + ip;
      const ipApiResponse = await fetch("https://ipapi.co/" + ip + "/json");
      const ipApiRes = await ipApiResponse.json();
      this.setState({ ipApiRes: ipApiRes });
      const lon = this.state.ipApiRes.longitude;
      const lat = this.state.ipApiRes.latitude;
      const weatherApi = await fetch(
        "https://api.darksky.net/forecast/67767c283ac095f44d7ea914cefbb11c/" +
          lat +
          "," +
          lon
      );
      console.log(
        "https://api.darksky.net/forecast/67767c283ac095f44d7ea914cefbb11c/" +
          lat +
          "," +
          lon +
          "/?exclude=minutely,hourly,daily,flags"
      );
      const weatherApiRes = await weatherApi.json();
      this.setState({ weatherApiRes: weatherApiRes });
      this.setState({ loading: false });
      this.setState({
        temp: Math.floor(this.state.weatherApiRes.currently.temperature)
      });
      console.log("state", this.state);
    } catch (e) {
      console.log("ip request ueiin aldaa: ", e);
    }
  };
  changeUnit() {
    if (this.state.unit === "F") {
      this.setState({ unit: "C" });
      let temp = Math.floor(this.state.weatherApiRes.currently.temperature);
      temp = Math.floor((temp - 32) * 5 / 9);
      this.setState({ temp });
    } else {
      let temp = Math.floor(this.state.weatherApiRes.currently.temperature);
      this.setState({ temp });
      this.setState({ unit: "F" });
    }
  }
  render() {
    return (
      <BackgroundImage>
        <Container>
          <Content>
              <View style={{flex: 1}}>
                <Text style={{ height: 50 }} />
              </View>
                <Body>
                  <CustomImage
                    loading={this.props.loading}
                    icon={
                      this.state.loading
                        ? null
                        : this.state.weatherApiRes.currently.icon
                    }
                  />
                  <Text
                    style={{ color: "white", fontSize: 40 }}
                    onPress={this.changeUnit}
                  >
                    {this.state.loading
                      ? <Text>loading</Text>
                      : this.state.temp + "°" + this.state.unit}
                  </Text>
                  <Text style={{ color: "white" }}>
                    {this.state.loading
                      ? <Text>loading</Text>
                      : this.state.weatherApiRes.currently.summary}
                  </Text>
                  <Text style={{ color: "white" }}>
                    {this.state.loading
                      ? <Text>loading</Text>
                      : this.state.ipApiRes.city}
                  </Text>
                  <Quote />
                </Body>
          </Content>
        </Container>
      </BackgroundImage>
    );
  }
}

const styles = {
  Body: {
    backgroundColor: "green",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
};
