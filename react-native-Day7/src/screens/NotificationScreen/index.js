import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Notification screen </Text>
        <Text onPress={() => this.props.navigation.navigate("Home")}>
          {" "}
          go to Homescreen{" "}
        </Text>

        <Icon name="user" type="AntDesign" />
      </View>
    );
  }
}
