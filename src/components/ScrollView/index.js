import React from "react";
import {StyleSheet, ScrollView, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f8f9",
        height: "100%",
        marginBottom: 10
    },
});

export default class extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </ScrollView>
        )
    }
}