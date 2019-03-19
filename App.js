import React from 'react';


import {View, Text, StatusBar} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/Home";
import InboxScreen from "./src/screens/Inbox"
import SearchScreen from "./src/screens/Search"
import SettingsScreen from "./src/screens/Settings"
import Icon from "react-native-vector-icons/Feather";
import {TABS, TABBAR_ICONS} from "./src/constants";
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);

const TabNavigator = createBottomTabNavigator({
        [TABS.Home]: HomeScreen,
        [TABS.Search]: SearchScreen,
        [TABS.Inbox]: InboxScreen,
        [TABS.Settings]: SettingsScreen,
    }, {
        swipeEnabled: true,
        animationEnabled: true,
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                const iconName = TABBAR_ICONS[routeName];
                return <Icon name={iconName} size={25} color={tintColor}/>;
            }
        }),
        tabBarOptions: {
            style: {
                height: 57
            },
            labelStyle: {
                fontWeight: "bold"
            }
        }
    }
    )
;

const AppContainer = createAppContainer(TabNavigator);
var SQLite = require('react-native-sqlite-storage');
export const db = SQLite.openDatabase({name:"user",createFromLocation:"~workey.db"})
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}