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
import ImagePicker from "react-native-image-picker";
import {Image,Share,Platform} from 'react-native';
export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  onPressHandler = () => {
    this.props.navigation.navigate("Notifications");
  };

  onCamStart = () => {

  if (Platform.OS = "android") {
    
  }
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: "Select Avatar",
      customButtons: [{ name: "fb", title: "Choose from google" }],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log("uri", response.uri);

        this.setState({
          img: response.uri
        });
      }
    });
  };
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
                <Text>Home Screen</Text>

                <Text onPress={this.onPressHandler}>Go to Notification</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: this.state.img }}
              />
            </CardItem>

            <CardItem footer>
              <Text 
              onPress={()=>{Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })}}>Take photo</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
