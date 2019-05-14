import React from "react";
import {View, StyleSheet, Text, TouchableWithoutFeedback, StatusBar, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import Input from "../../components/Input";
import WorkeyLogo from "../../assets/images/icons/w.png";

export const styles = StyleSheet.create({
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
        width: "100%",
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
    customSignInButton: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 13,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: "center",
    },
    inputContainer: {
        marginHorizontal: 0
    },
    input: {
        color: "#ffffff",
        fontSize: 20,
    },
    label: {
        color: "#fff",
        fontSize: 16,
    },
});

export default class SignInScreen extends React.Component {
    state = {
        username: "",
        password: "",
    };

    onUsernameChange = (username) => {
        this.setState({username});
    };

    onPasswordChange = (password) => {
        this.setState({password});
    };

    onBack = () => {
        this.props.navigation.goBack();
    };

    onFBLogin = () => {
        this.props.facebookLogin();
    };

    onGoogleLogin = () => {
        this.props.googleLogin();
    };

    onEmailLogin = () => {
        let {username, password} = this.state;
        this.props.emailLogin(username, password);
    };

    render() {
        return (
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                            colors={["#00A0C3", "#2580B3", "#00A0C3", "#2580B3"]} style={{flex: 1}}>
                <StatusBar translucent backgroundColor={"transparent"}/>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.onBack}>
                        <IonIcon name={"md-arrow-round-back"} color={"#fff"} size={30}/>
                    </TouchableWithoutFeedback>
                    <View style={{height: "90%"}}>
                        <View style={[styles.rowContainer, {justifyContent: "space-between"}]}>
                            <View>
                                <Text style={[styles.title]}>Sign In</Text>
                                <View style={styles.divider}/>
                            </View>
                            <Image source={WorkeyLogo} style={styles.logo}/>
                        </View>
                        <View>
                            <Input label="Email address" labelStyle={styles.label} inputStyle={styles.input}
                                   inputContainerStyle={styles.inputContainer} onValueChange={this.onUsernameChange}/>
                            <Input label="Password" labelStyle={styles.label} inputStyle={styles.input}
                                   secureTextEntry={true} inputContainerStyle={styles.inputContainer}
                                   onValueChange={this.onPasswordChange}/>
                            <View style={[styles.rowContainer, {justifyContent: "space-between"}]}>
                                <TouchableWithoutFeedback onPress={this.onEmailLogin}>
                                    <View style={[styles.customSignInButton]}>
                                        <Text style={[styles.title, {color: "#514A9D", fontSize: 16}]}>Sign In</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <Text style={[styles.title, {textAlign: "center", fontSize: 15}]}>or</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback onPress={this.onFBLogin}>
                                <View style={[styles.signInButton, {backgroundColor: "#4267b2"}]}>
                                    <Icon name={"facebook-f"} style={styles.buttonIcon}/>
                                    <Text style={[styles.title, {fontSize: 16}]}>Sign In With Facebook</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback onPress={this.onGoogleLogin}>
                                <View style={[styles.signInButton, {backgroundColor: "#DD4B39"}]}>
                                    <Icon name={"google"} style={styles.buttonIcon}/>
                                    <Text style={[styles.title, {fontSize: 16}]}>Sign In With Google</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}