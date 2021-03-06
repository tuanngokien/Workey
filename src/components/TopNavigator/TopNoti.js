import React from "react";
import {ImageBackground, StatusBar, StyleSheet, Text, View, TouchableWithoutFeedback} from "react-native";
import HomeBackground from "../../assets/images/background/sky.png";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
    },
    topNavigatorContainer: {
        paddingTop: 25,
        paddingHorizontal: "3%",
        flexDirection: "row",
        alignItems: "center",
    },
    imageBackground: {
        width: '100%',
        height: 60,
        resizeMode: "cover",
    },
    icon: {
        color: "#ffffff",
        fontSize: 30,
    },
    headerTitle: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: "Nunito-Bold",
    }
});

export const Navigator = ({title, rightIconName, overlayOpacity, iconVisible}) => {
    return (
        <View style={[styles.overlayContainer, {backgroundColor: `rgba(0,0,0,${overlayOpacity || 0})`}]}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            {(iconVisible==null || iconVisible) &&
            <View style={styles.topNavigatorContainer}>
                
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
                <View style={{flex: 1, alignItems: "flex-end"}}>
                    <Icon name={rightIconName} style={[styles.icon]}/>
                </View>
            </View>}
        </View>)
};
export const NavigatorNoti = ({title, rightIconName, overlayOpacity, iconVisible}) => {
    return (
        <View style={[styles.overlayContainer, {backgroundColor: `rgba(0,0,0,${overlayOpacity || 0})`}]}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            {(iconVisible==null || iconVisible) &&
            <View style={styles.topNavigatorContainer}>
                
                <View style={{flex: 1, alignItems: "flex-start",marginBottom:10}}>
                    <Text style={{left:0,color: "#ffffff",fontSize: 20,fontFamily: "Nunito-Bold",}}>{title}</Text>
                </View>
                <View style={{flex: 1, alignItems: "flex-end"}}>
                    <Icon name={rightIconName} style={[styles.icon]}/>
                </View>
            </View>}
        </View>)
};
const TopNoti = ({coverSource, coverStyle, ...navProps}) => {
    const finalCoverStyle = StyleSheet.flatten([styles.imageBackground, coverStyle]);
    return (
        <ImageBackground source={coverSource || HomeBackground} style={finalCoverStyle}>
            <NavigatorNoti {...navProps}/>
        </ImageBackground>

    )
};

export default TopNoti;