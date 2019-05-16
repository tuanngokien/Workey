import React from 'react';

import {View, Text, StatusBar} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/Home";
import InboxNavigator from "./src/screens/Inbox/index"
import NotificationScreen from "./src/screens/Notification";
import SearchScreen from "./src/screens/Search";
import SettingsScreen from "./src/screens/Settings";
import Icon from "react-native-vector-icons/Feather";
import EIcon from "react-native-vector-icons/Entypo";
import MIcon from "react-native-vector-icons/AntDesign";
import {TABS, TABBAR_ICONS, MAIN_COLOR} from "./src/constants";
import {YellowBox} from 'react-native';
import SignInScreen from "./src/screens/SignIn";
import { connect } from 'react-redux';
import {isAuthenticated} from "./src/actions/auth";


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
                        size={25}
                        color={tintColor}
                    />
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
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name={TABBAR_ICONS[TABS.Search]}
                    color={tintColor}
                    size={25}
                />
            )
        }),
    },
    // [TABS.Inbox]: InboxScreen,
    [TABS.Inbox]: {
        screen: InboxNavigator,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <MIcon
                    name={"message1"}
                    color={tintColor}
                    size={25}
                />
            )
        }),
    },
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