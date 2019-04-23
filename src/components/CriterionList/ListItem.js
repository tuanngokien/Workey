import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {styles as titleStyles} from "../../containers/TopEmployers";
import Icon from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 3,
    },
    text: {
        ...titleStyles.subtitleContainer,
        color: "#4c4c4c",
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    iconContainer: {
        width: 30,
        height: 15,
    },
    icon: {
        position: "absolute",
        top: -5,
        fontSize: 30,
        color: "#4285f4"
    }
});


export default ListItem = ({text}) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Icon name={"dot-single"} style={styles.icon}/>
        </View>
        <Text style={styles.text}>{text}</Text>
    </View>
);