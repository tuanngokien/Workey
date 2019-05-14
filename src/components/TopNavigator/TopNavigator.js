import React from "react";
import {View, Text, StatusBar, StyleSheet} from "react-native"
import {Avatar, Image} from 'react-native-elements';
import WorkeyLogo from "../../assets/images/icons/w.png";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: "5%",
        backgroundColor: "#7376FF",
    },
    title: {
        fontSize: 18,
        fontFamily: "Nunito-Bold",
        color: "#ffffff"
    },
    avatarContainer: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#d6d7da'
    },
    overlayAvatarContainer: {
        borderWidth: 2.5,
        borderColor: 'transparent'
    },
});

class TopNavigator extends React.Component {
    render() {
        let {title, containerStyle, titleStyle} = this.props;
        const finalContainerStyle = StyleSheet.flatten([styles.container, containerStyle]);
        const finalTitleStyle = StyleSheet.flatten([styles.title, titleStyle]);
        return (
            <View style={finalContainerStyle}>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                />
                <Image
                    source={WorkeyLogo}
                    style={{width: 35, height: 35}}
                    resizeMode={"contain"}
                />

                <Text style={finalTitleStyle}>
                    {title}
                </Text>
                <View style={{flexDirection: "row"}}>
                    <Avatar
                        rounded
                        source={require("../../assets/images/avatar/avatar6_sm.jpg")}
                        size={47}
                        containerStyle={styles.avatarContainer}
                        overlayContainerStyle={styles.overlayAvatarContainer}
                    />
                </View>
            </View>
        );
    }
}

export default TopNavigator;