import SettingsScreen from "./Settings";
import {ProfileScreen, EditProfileScreen, ChangePasswordScreen} from "../Profile";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {SETTING_SCREEN, PROFILE_SCREEN, EDIT_PROFILE_SCREEN, CHANGE_PASSWORD_SCREEN} from "./Tabs";


const RootStack = createStackNavigator(
    {
        [SETTING_SCREEN]: SettingsScreen,
        [PROFILE_SCREEN]: ProfileScreen,
        [EDIT_PROFILE_SCREEN]: EditProfileScreen,
        [CHANGE_PASSWORD_SCREEN]: ChangePasswordScreen,
    },
    {
        initialRouteName: PROFILE_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);
