import React from "react";
import {View, Text, TouchableWithoutFeedback, StatusBar, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import Input from "../../components/Input";
import {styles} from "./SignIn";
import WorkeyLogo from "../../assets/images/icons/w.png";

export default class SignUpScreen extends React.Component {
    onBack = () => {
        this.props.navigation.goBack()
    };

    render() {
        return (
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={["#00A0C3", "#2580B3", "#00A0C3", "#2580B3"]} style={{flex: 1}}>
                <StatusBar translucent backgroundColor={"transparent"}/>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.onBack}>
                        <IonIcon name={"md-arrow-round-back"} color={"#fff"} size={30}/>
                    </TouchableWithoutFeedback>
                    <View style={{height: "90%"}}>
                        <View style={[styles.rowContainer, {justifyContent: "space-between"}]}>
                            <View>
                                <Text style={[styles.title]}>Sign Up</Text>
                                <View style={styles.divider}/>
                            </View>
                            <Image source={WorkeyLogo} style={styles.logo}/>
                        </View>
                        <View>
                            <Input label="First Name" labelStyle={styles.label} inputStyle={styles.input} inputContainerStyle={styles.inputContainer}/>
                            <Input label="Last Name" labelStyle={styles.label} inputStyle={styles.input} inputContainerStyle={styles.inputContainer}/>
                            <Input label="Email address" labelStyle={styles.label} inputStyle={styles.input} inputContainerStyle={styles.inputContainer}/>
                            <Input label="Password" labelStyle={styles.label} inputStyle={styles.input} secureTextEntry={true} inputContainerStyle={styles.inputContainer}/>
                            <View style={[styles.rowContainer, {justifyContent: "space-between"}]}>
                                <TouchableWithoutFeedback>
                                    <View style={[styles.customSignInButton]}>
                                        <Text style={[styles.title, {color: "#514A9D",fontSize: 16}]}>Sign Up</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <Text style={[styles.title, {textAlign: "center", fontSize: 15}]}>or</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback>
                                <View style={[styles.signInButton, {backgroundColor: "#4267b2"}]}>
                                    <Icon name={"facebook-f"} style={styles.buttonIcon}/>
                                    <Text style={[styles.title, {fontSize: 16}]}>Sign Up With Facebook</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback>
                                <View style={[styles.signInButton, {backgroundColor: "#DD4B39"}]}>
                                    <Icon name={"google"} style={styles.buttonIcon}/>
                                    <Text style={[styles.title, {fontSize: 16}]}>Sign Up With Google</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}