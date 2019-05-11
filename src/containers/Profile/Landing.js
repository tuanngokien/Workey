import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import CoverImage from "../../assets/images/background/network.jpg";

const styles = StyleSheet.create({
    cover: {
        height: 200
    },
});

export default class ProfileLandingContainer extends React.Component {
    render() {
        return (
            <View>
                <SimpleTopNavigator title={""} coverSource={CoverImage} rightIconName={null}
                                    coverStyle={styles.cover} overlayOpacity={0} iconVisible={false}/>
            </View>
        );
    }
}