import React from "react";
import {StyleSheet, View} from "react-native";
import ProfileContainer from "../../containers/Profile";
import {Navigator} from "../../components/TopNavigator/SimpleTopNavigator";


const styles = StyleSheet.create({
    navContainer: {
        position: "absolute",
        top: 0,
        zIndex: 10000,
        width: "100%"
    }
});

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.navContainer}>
                    <Navigator title={""} rightIconName={"md-share"}/>
                </View>
                <ProfileContainer/>
            </View>
        )
    }
}