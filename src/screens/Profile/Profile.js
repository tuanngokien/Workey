import React from "react";
import {StyleSheet, View} from "react-native";
import ProfileContainer from "../../containers/Profile";
import {Navigator} from "../../components/TopNavigator/SimpleTopNavigator";
import {SETTING_SCREEN, EDIT_PROFILE_SCREEN} from "../Settings/Tabs";

const styles = StyleSheet.create({
    navContainer: {
        position: "absolute",
        top: 0,
        zIndex: 10000,
        width: "100%"
    }
});

export default class ProfileScreen extends React.Component {
    onPressEdit = () => {
        this.props.navigation.navigate(EDIT_PROFILE_SCREEN)
    };

    onPressSetting = () => {
        this.props.navigation.navigate(SETTING_SCREEN)
    };

    render() {
        return (
            <View>
                <View style={styles.navContainer}>
                    <Navigator title={""} rightIconName={"ios-settings"} onRightPress={this.onPressSetting} leftIconName={null}/>
                </View>
                <ProfileContainer onEdit={this.onPressEdit}/>
            </View>
        )
    }
}