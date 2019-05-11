import React from "react";
import {View} from "react-native";

export const Divider = (props) => (
    <View style={[{marginTop: props.height || 55}, props.style]}></View>
)

export const ColoredDivider = (props) => (
    <Divider {...props} height={0.1} style={[{
        borderBottomColor: "rgb(218, 220, 224)",
        borderBottomWidth: 1,
        marginHorizontal: "5%"
    }, props.style]}/>
)