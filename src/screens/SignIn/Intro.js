import React from "react";
import {View, StyleSheet, Text, ImageBackground, Image, TouchableWithoutFeedback, StatusBar} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import WorkBackground from "../../assets/images/background/work2.jpg";
import WorkeyLogo from "../../assets/images/icons/w.png";
import {SIGN_IN_SCREEN, SIGN_UP_SCREEN} from "./Tabs";

const styles = StyleSheet.create({
    imageBackground: {
        // width: '100%',
        height: "100%",
        resizeMode: "contain",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: "5%",
        justifyContent: "space-between",
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginRight: 8,
    },
    title: {
        fontFamily: "Nunito-Bold",
        color: "#fff",
        fontSize: 25,
    },
    subTitle: {
        fontFamily: "Nunito-SemiBold",
        color: "#fff",
        fontSize: 14,
    },
    divider: {
        width: "20%",
        height: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        borderRadius: 50,
        overflow: "hidden",
    },
    buttonIcon: {
        fontSize: 25,
        color: "#fff",
        marginRight: 15,
        position: "absolute",
        left: "5%",
    },
    signInButton: {
        width: "100%",
        paddingVertical: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default class IntroScreen extends React.Component {
    onSelectSignIn = () => {
        this.props.navigation.navigate(SIGN_IN_SCREEN)
    };

    onSelectSignUp = () => {
        this.props.navigation.navigate(SIGN_UP_SCREEN)
    };

    render() {
        return (
            <ImageBackground source={WorkBackground} style={styles.imageBackground}>
                <StatusBar translucent backgroundColor={"transparent"}/>
                <LinearGradient colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]} style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.rowContainer}>
                            <Image source={WorkeyLogo} style={styles.logo}/>
                            <Text style={styles.title}>Workey</Text>
                        </View>
                        <View style={{height: "48%"}}>
                            <Text style={[styles.title]}>Find your</Text>
                            <Text style={[styles.title]}>dream job instantly</Text>
                            <View style={styles.divider}/>
                            <Text style={[styles.subTitle, {marginBottom: 20}]}>With millions of jobs all over the world, we bring you the ability to connect to employers no matter where you are.</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableWithoutFeedback onPress={this.onSelectSignIn}>
                                    <View style={[styles.signInButton, {backgroundColor: "#fff"}]}>
                                        <Text style={[styles.title, {color: "#514A9D",fontSize: 16}]}>Sign In</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableWithoutFeedback onPress={this.onSelectSignUp}>
                                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#514A9D', '#24C6DC']} style={styles.signInButton}>
                                        <Text style={[styles.title, {color: "#fff",fontSize: 16}]}>Sign Up</Text>
                                    </LinearGradient>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        )
    }
}