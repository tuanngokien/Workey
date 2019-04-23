import React from "react";
import {View, Text, TouchableWithoutFeedback, StyleSheet} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../../constants";


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4285f4",
        width: DEVICE_WIDTH * 0.8,
        height: DEVICE_HEIGHT * 0.07,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    text: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "#ffffff",
    }
});

export default class ApplyButton extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={styles.text}>APPLY THIS JOB</Text>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}