import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

const navigator = createStackNavigator(
  {
    // key = navigation trigger to pass into nav functions, value = component to render
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Cam's First Ract Native App",
    },
  }
);

export default createAppContainer(navigator);
