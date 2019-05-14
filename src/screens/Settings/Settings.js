import React from "react";
import {View} from 'react-native';
import {SimpleTopNavigator} from "../../components/TopNavigator";
import SettingsContainer from '../../containers/Settings';


class SettingsScreen extends React.Component {
    state = {
        notificationsEnable: true,
    };


    render() {
        return (
            <View>
                <View>
                    <SimpleTopNavigator title={"Settings"} rightIconName="ios-settings" onBack={this.onBack}/>
                    <SettingsContainer/>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;