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

export default class Quote extends Component {
  state = {
    loading: "true"
  };
  componentWillMount = async () => {
    try {
      let obj = {
        method: "GET",
        headers: {
          "X-Mashape-Key": "nmGl49BcKamshO6iM5Ox5y3uHxHXp13dxARjsn6EvOAAmlcgbQ"
        }
      };
      let url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies";
      const response = fetch(url, obj);
      const res = await response;
      let quote = res.json();
      this.setState({ quote: quote });
      console.log(this.state);
      this.setState({ loading: false });
    } catch (error) {
      console.log("quote duudah ueiin aldaa: ", error);
    }
  };
  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <Body>
          <Text style={{ color: "white", fontSize: 15, marginTop: 30, textAlign: 'center', width: 250}}>
            {this.state.quote._65.quote} - {this.state.quote._65.author}
          </Text>
        </Body>
      );
    }
  }
}
