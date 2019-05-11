import HomeScreen from "./Home";
import {createStackNavigator, createAppContainer} from "react-navigation";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootStack);