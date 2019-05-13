import React from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import Icon from "react-native-vector-icons/Feather";


const BORDER_COLOR = "rgb(218, 220, 224)";
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        borderBottomColor: BORDER_COLOR,
        borderBottomWidth: BORDER_WIDTH,
        alignItems: "center",
    },
    label: {
        fontFamily: "Nunito-SemiBold",
        paddingTop: 5,
        fontSize: 13.5,
        color: "#757575",
    },
    inputContainer: {
        marginHorizontal: "5%",

    },
    input: {
        fontFamily: "Nunito-SemiBold",
        fontWeight: 'normal',
        color: "#000",
        fontSize: 17,
        minHeight: 0,
        padding: 0,
        margin: 0,
        paddingTop: 3,
        paddingBottom: 8,
        flex: 1,
    }
});

export default class MyInput extends React.Component {
    render() {
        const {inputContainerStyle, label, value, placeholder, children, iconName, labelStyle, inputStyle, secureTextEntry} = this.props;
        const finalContainerStyle = StyleSheet.flatten([styles.inputContainer, inputContainerStyle]);
        const finalLabelStyle = StyleSheet.flatten([styles.label, labelStyle]);
        const finalInputStyle = StyleSheet.flatten([styles.input, inputStyle]);
        return (
            <View style={finalContainerStyle}>
                <Text style={finalLabelStyle}>{label}</Text>
                <View style={styles.rowContainer}>
                    <TextInput
                        style={finalInputStyle}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
                    <Icon name={iconName} size={25} color={"rgba(117, 117, 117, .5)"}/>
                </View>
                {children}
            </View>
        )
    }
}