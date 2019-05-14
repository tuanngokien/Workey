import SearchFilterScreen from "./SearchFilter";
import SearchResultScreen from "./SearchResult";
import JobDetailScreen from "../JobDetail";
import MapScreen from "../JobDetail/FullMap";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {SEARCH_FILTER_SCREEN, SEARCH_RESULT_SCREEN, JOB_DETAIL_SCREEN, SHOW_FULL_MAP} from "./Tabs";

const RootStack = createStackNavigator(
    {
        [SEARCH_FILTER_SCREEN]: SearchFilterScreen,
        [SEARCH_RESULT_SCREEN]: SearchResultScreen,
        [JOB_DETAIL_SCREEN]: JobDetailScreen,
        [SHOW_FULL_MAP]: MapScreen,
    },
    {
        initialRouteName: SEARCH_FILTER_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);