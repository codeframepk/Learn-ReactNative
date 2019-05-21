import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
export default class CardHeaderFooterExample extends Component {
    onPressHandler = () => {
        this.props.navigation.navigate("Notifications");
    }
  render() {
    return (
      <Container>
        
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text >Home Screen</Text>

                <Text onPress={this.onPressHandler} >Go to Notification</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
