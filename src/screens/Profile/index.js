import ProfileScreen from "./Profile";
import EditProfileScreen from "./EditProfile";
import {createAppContainer, createStackNavigator} from "react-navigation";
import JobDetailScreen from "../JobDetail";
import {PROFILE_SCREEN, EDIT_PROFILE_SCREEN} from "./Tabs";

const RootStack = createStackNavigator(
    {
        [PROFILE_SCREEN]: ProfileScreen,
        [EDIT_PROFILE_SCREEN]: EditProfileScreen,
    },
    {
        initialRouteName: PROFILE_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);