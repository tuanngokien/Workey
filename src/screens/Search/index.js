import SearchFilterScreen from "./SearchFilter";
import SearchResultScreen from "./SearchResult";
import JobDetailScreen from "../JobDetail";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {SEARCH_FILTER_SCREEN, SEARCH_RESULT_SCREEN, JOB_DETAIL_SCREEN} from "./Tabs";



const RootStack = createStackNavigator(
    {
        [SEARCH_FILTER_SCREEN]: SearchFilterScreen,
        [SEARCH_RESULT_SCREEN]: SearchResultScreen,
        [JOB_DETAIL_SCREEN]: JobDetailScreen,
    },
    {
        initialRouteName: SEARCH_FILTER_SCREEN,
        defaultNavigationOptions: {
            header: null
        }
    },
);

export default createAppContainer(RootStack);