import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon,Button,Spinner } from "native-base";
import axios from "axios";
export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader:false,
      data:{},
      name:"naveed-rana"
    };
  }

  generateHttpRequest = () => {
this.setState({loader:true})
axios.get(`https://api.github.com/users/${this.state.name}`)
.then(res => {

  console.log(res.data)
  this.setState({data:res.data})
})
.catch(err => {
  console.error(err); 
}).finally(()=>{
  this.setState({loader:false})
})
    

  }
 
  render() {
    return (
      <View>
        <Text> Notification screen </Text>
        <Text onPress={() => this.props.navigation.navigate("Home")}>
          {" "}
          go to Homescreen{" "}
        </Text>

        <Icon  name="user" type="AntDesign" />

         
       {this.state.loader ? 
       
       
       <Button>
          <Spinner color="white" />
       </Button>
       
      
       
       :
       <Button onPress={this.generateHttpRequest}>
         
         <Text>Generate Request</Text>
         
       </Button> 
      }

      
      <Text>bio:{this.state.data.bio}</Text>
      
       
      </View>
    );
  }
}
