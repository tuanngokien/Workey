import CategoriesScreen from "./Categories";

import {createStackNavigator, createAppContainer} from "react-navigation";

const RootStack = createStackNavigator(
    {
        Categories: CategoriesScreen,
    },
    {
        initialRouteName: 'Categories',
    }
);

export default createAppContainer(RootStack);
