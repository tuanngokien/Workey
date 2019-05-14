import React from "react";
import {View} from 'react-native';
import {SimpleTopNavigator} from "../../components/TopNavigator";
import SettingsContainer from '../../containers/Settings';
import {EDIT_PROFILE_SCREEN, CHANGE_PASSWORD_SCREEN} from "./Tabs";


class SettingsScreen extends React.Component {
    state = {
        notificationsEnable: true,
    };

    onBack = () => {
        this.props.navigation.goBack();
    };

    onPressEdit = () => {
        this.props.navigation.navigate(EDIT_PROFILE_SCREEN);
    };

    onPressChangePassword = () => {
        this.props.navigation.navigate(CHANGE_PASSWORD_SCREEN);
    };

    render() {
        return (
            <View>
                <View>
                    <SimpleTopNavigator title={"Settings"} rightIconName="ios-settings" onBack={this.onBack}/>
                    <SettingsContainer onPressEdit={this.onPressEdit} onPressChangePassword={this.onPressChangePassword}/>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;