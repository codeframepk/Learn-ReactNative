import React, { Component } from "react";
import { View, Text } from "react-native";
import Setup from "./src/Navigations/config";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Setup />;
  }
}

export default App;
