import React from "react";
import {ImageBackground, StatusBar, StyleSheet, Text, View, TouchableWithoutFeedback} from "react-native";
import HomeBackground from "../../assets/images/background/sky.png";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        justifyContent: "space-between",
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

export const Navigator = ({title, leftIconName, rightIconName, overlayOpacity, iconVisible, onBack, onRightPress, children}) => {
    return (
        <View style={[styles.overlayContainer, {backgroundColor: `rgba(0,0,0,${overlayOpacity || 0})`}]}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            {(iconVisible==null || iconVisible) &&
            <View style={styles.topNavigatorContainer}>
                <View style={{flex: 1, alignItems: "flex-start"}}>
                    <TouchableWithoutFeedback onPress={onBack}>
                        <Icon name={leftIconName === null ? null : "md-arrow-round-back"} style={styles.icon}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
                <View style={{flex: 1, alignItems: "flex-end"}}>
                    <TouchableWithoutFeedback onPress={onRightPress}>
                        <Icon name={rightIconName} style={[styles.icon]}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>}
            {children}
        </View>)
};

const TopNavigator = ({coverSource, coverStyle, ...navProps}) => {
    const finalCoverStyle = StyleSheet.flatten([styles.imageBackground, coverStyle]);
    return (
        <ImageBackground source={coverSource || HomeBackground} style={finalCoverStyle}>
            <Navigator {...navProps}/>
        </ImageBackground>

    )
};

export default TopNavigator;