import React from 'react';

import {View, Text, StatusBar} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/Home";
import InboxScreen from "./src/screens/Inbox/Inbox";
import InboxNavigator from "./src/screens/Inbox/index"
import NotificationScreen from "./src/screens/Notification";
import SearchScreen from "./src/screens/Search";
import SettingsScreen from "./src/screens/Settings";
import Icon from "react-native-vector-icons/Feather";
import { Badge } from 'react-native-elements'
import EIcon from "react-native-vector-icons/Entypo";
import {TABS, TABBAR_ICONS, MAIN_COLOR} from "./src/constants";
import OneSignal from 'react-native-onesignal'; 
import {YellowBox} from 'react-native';
import NumberNotification from "./src/components/NumberNotification/NumberNotification"
import SignInScreen from "./src/screens/SignIn";
import { connect } from 'react-redux';
import {isAuthenticated} from "./src/actions/auth";


YellowBox.ignoreWarnings(['Remote debugger']);

const TabNavigator = createBottomTabNavigator({
    [TABS.Home]: HomeScreen,
    [TABS.Notification]: {
        screen: NotificationScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon
                        name={TABBAR_ICONS[TABS.Notification]}
                        size={25}
                        color={tintColor}
                    />
                    {/* <NumberNotification number="1" />  */}
                    <EIcon
                        name="dot-single"
                        style={{color: "#00ADFF", fontSize: 30, position: 'absolute', top: -13, right: -13}}
                    />
                </View>
            )
        }),
    },
    [TABS.Search]: {
        screen: SearchScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={TABBAR_ICONS[TABS.Search]}
                    color={tintColor}
                    size={25}
                    // style={{padding: 12, backgroundColor: MAIN_COLOR, borderRadius: 100}}
                />
            )
        }),
    },
    // [TABS.Inbox]: InboxScreen,
    [TABS.Inbox]: InboxNavigator,
    [TABS.Settings]: SettingsScreen,
}, {
    initialRouteName: TABS.Search,
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            const iconName = TABBAR_ICONS[routeName];
            return <Icon name={iconName} size={25} color={tintColor}/>;
        }
    }),
    tabBarOptions: {
        tabBarPosition: 'bottom',
        style: {
            height: 48,
            borderTopColor: "transparent",


            backgroundColor: "#ffffff"
        },
        showLabel: false,
        activeTintColor: MAIN_COLOR
    }
});

const MainContainer = createAppContainer(TabNavigator);
var SQLite = require('react-native-sqlite-storage');
export const db = SQLite.openDatabase({name:"user",createFromLocation:"~workey.db"});

class App extends React.Component {
    componentDidMount(){
        this.props.isAuthenticated();
    }

    render() {
        let {signedIn} = this.props;
        if(signedIn){
            return <MainContainer/>;
        }else{
            return <SignInScreen/>;
        }
    }
}

export default connect(
    (state) => {
        return {
            signedIn: state.auth.signedIn,
        }
    },
    {isAuthenticated},
)(App)