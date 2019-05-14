import React from "react";
import {View, StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    card: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 13,
        color: "#757575",
        backgroundColor: "#f6f8f9",
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        borderRadius: 10,
        borderColor: "#eceeef",
        borderWidth: 1,
        marginRight: 10,
        marginBottom: 10,
    }
});


export default class RoleContainer extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.card}>UI / UX Designer</Text>
                <Text style={styles.card}>Full Stack Developer</Text>
                <Text style={styles.card}>Team Leader</Text>
                <Text style={styles.card}>Graphic Designer</Text>
                <Text style={styles.card}>+5 more roles</Text>
            </View>
        )
    }
}