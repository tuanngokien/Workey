import HomeScreen from "./Home";
import NewsDetailScreen from "../NewsDetail";
import {createStackNavigator, createAppContainer} from "react-navigation";
import {HOME_SCREEN, NEWS_DETAIL_SCREEN} from "./Tabs";

const RootStack = createStackNavigator(
    {
        [HOME_SCREEN]: HomeScreen,
        [NEWS_DETAIL_SCREEN]: NewsDetailScreen,
    },
    {
        initialRouteName: HOME_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createAppContainer(RootStack);