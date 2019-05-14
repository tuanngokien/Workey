import JobDetailScreen from "./JobDetail";
import FullMap from "./FullMap";
import {SHOW_FULL_MAP,JOB_DETAIL} from "./Tabs";
import {createAppContainer, createStackNavigator} from "react-navigation";




const RootStack = createStackNavigator(
    {
        [SHOW_FULL_MAP]: FullMap,
        [JOB_DETAIL]:JobDetailScreen
    },
    {
        initialRouteName: JOB_DETAIL,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);