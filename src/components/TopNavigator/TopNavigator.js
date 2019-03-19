import React from "react";
import {View, Text, StatusBar, StyleSheet} from "react-native"
import {Avatar, Image} from 'react-native-elements';
import WorkplaceLogo from "../../assets/images/icons/w.png";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: "5%",
        backgroundColor: "#7376FF",
    },
    titleContainer: {
        fontSize: 19,
        fontFamily: "Poppins-Bold",
        color: "#ffffff"
    }
});

class TopNavigator extends React.Component {
    render() {
        let {title, containerStyle, titleStyle} = this.props;
        const finalContainerStyle = StyleSheet.flatten([styles.container, containerStyle]);
        const finalTitleStyle = StyleSheet.flatten([styles.title, titleStyle]);
        return (
            <View style={finalContainerStyle}>
                <StatusBar
                    backgroundColor="#7376FF"
                />
                <Image
                    source={WorkplaceLogo}
                    style={{width: 35, height: 35, resizeMode: "contain"}}
                />
                <Text style={finalTitleStyle}>
                    {title}
                </Text>
                <View style={{flexDirection: "row"}}>
                    <Avatar
                        rounded
                        source={require("../../assets/images/avatar/avatar5.jpeg")}
                        size={47}
                        containerStyle={{
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: '#d6d7da'
                        }}
                        overlayContainerStyle={{
                            borderWidth: 2.5,
                            borderColor: 'transparent'
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default TopNavigator;