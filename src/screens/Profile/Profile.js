import React from "react";
import {StyleSheet, View} from "react-native";
import ProfileContainer from "../../containers/Profile";
import {Navigator} from "../../components/TopNavigator/SimpleTopNavigator";
import {EDIT_PROFILE_SCREEN} from "./Tabs";

const styles = StyleSheet.create({
    navContainer: {
        position: "absolute",
        top: 0,
        zIndex: 10000,
        width: "100%"
    }
});

export default class ProfileScreen extends React.Component {
    onEdit = () => {
        this.props.navigation.navigate(EDIT_PROFILE_SCREEN)
    };

    render() {
        return (
            <View>
                <View style={styles.navContainer}>
                    <Navigator title={""} rightIconName={"md-share"}/>
                </View>
                <ProfileContainer onEdit={this.onEdit}/>
            </View>
        )
    }
}