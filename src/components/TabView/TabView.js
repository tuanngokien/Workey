import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        elevation: 1,
    }
});

export default class TabView extends React.Component{
    render(){
        const {style} = this.props;
        const finalStyle = StyleSheet.flatten([styles.container, style])
        return (
            <View style={finalStyle}>
                {this.props.children}
            </View>
        )
    }
}