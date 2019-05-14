import React from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        borderBottomWidth: 1.5,
        borderBottomColor: "rgba(183, 183, 183, .4)",
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "#000",
    },
    leftIcon: {
        fontSize: 30,
    },
    rightIcon: {
        fontSize: 30,
        color: "rgba(183, 183, 183, .8)",
    },
});

export default class SettingCard extends React.Component {
    render() {
        const {iconName, iconRightVisible, title, onPress} = this.props;
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <View style={[styles.container, {marginVertical: 0, borderBottomWidth: 0, flex: 0.8}]}>
                        <View style={{flex: 0.16}}>
                            <Icon name={iconName} style={styles.leftIcon}/>
                        </View>
                        <View style={{flex: 0.84}}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </View>
                    {iconRightVisible !== false && <Icon name={"ios-arrow-forward"} style={styles.rightIcon}/>}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}