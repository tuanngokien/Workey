import CategoriesScreen from "../Categories";
import HomeScreen from "./Home";
import {createStackNavigator, createAppContainer} from "react-navigation";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Categories: CategoriesScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootStack);
