import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 14,
        color: "#000000"
    },
    subTitle: {
        fontFamily: "Nunito-Regular",
        fontSize: 12.5,
        color: "#757575",
        marginTop: 3,
    },
});


export default class EducationContainer extends React.Component {
    render() {
        return (
            <View style={styles.rowContainer}>
                <Image source={require("../../assets/images/logo/uet.png")} style={styles.image}/>
                <View>
                    <Text style={styles.title}>UET, Vietnam National University, Hanoi</Text>
                    <Text style={[styles.subTitle, {color: "#000"}]}>Bachelor's degree, Computer Science</Text>
                    <Text style={[styles.subTitle]}>2016-2020</Text>
                </View>
            </View>
        )
    }
}