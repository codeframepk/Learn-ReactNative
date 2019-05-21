//screens
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
//config
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },

  Notifications: {
    screen: NotificationScreen
  }
},{
    headerMode:'none'
});

export default createAppContainer(AppNavigator);
