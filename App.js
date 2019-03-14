import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/Home";
import InboxScreen from "./src/screens/Inbox";
import NotificationScreen from "./src/screens/Notification";
import SearchScreen from "./src/screens/Search";
import SettingsScreen from "./src/screens/Settings";
import Icon from "react-native-vector-icons/Feather";
import {TABS, TABBAR_ICONS} from "./src/constants";
import {Badge} from 'react-native-elements'
import {YellowBox} from 'react-native';


YellowBox.ignoreWarnings(['Remote debugger']);

const TabNavigator = createBottomTabNavigator({
    [TABS.Home]: HomeScreen,
    [TABS.Notification]: {
        screen: NotificationScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <View>
                    <Icon
                        name={TABBAR_ICONS[TABS.Notification]}
                        color={"#ffffff"}
                        size={26}
                        color={tintColor}
                    />
                    <Badge
                        value="8"
                        status="error"
                        containerStyle={{position: 'absolute', top: -8.5, right: -12}}
                    />
                </View>
            )
        }),
    },
    [TABS.Search]: {
        screen: SearchScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name={TABBAR_ICONS[TABS.Search]}
                    color={"#ffffff"}
                    size={28}
                    style={{padding: 12, backgroundColor: "#4F5BE3", borderRadius: 100}}
                />
            )
        }),
    },
    [TABS.Inbox]: InboxScreen,
    [TABS.Settings]: SettingsScreen,
}, {
    initialRouteName: TABS.Home,
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            const iconName = TABBAR_ICONS[routeName];
            return <Icon name={iconName} size={25} color={tintColor}/>;
        }
    }),
    tabBarOptions: {
        style: {
            height: 63,
            borderTopColor: "transparent",
            shadowColor: "rgba(0, 0, 0, 1)",
            shadowOffset: {
                width: 0,
                height: -10,
            },
            elevation: 4,
            backgroundColor: "#ffffff"
        },
        showLabel: false,
        activeTintColor: "#4F5BE3"
    }
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}