import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './style';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Footer </Text>
      </View>
    );
  }
}
export default Footer;
