import SettingsScreen from "./Settings";
import ProfileScreen from "../Profile";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {SETTING_SCREEN, PROFILE_SCREEN} from "./Tabs";



const RootStack = createStackNavigator(
    {
        [SETTING_SCREEN]: SettingsScreen,
        [PROFILE_SCREEN]: ProfileScreen,
    },
    {
        initialRouteName: SETTING_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);
