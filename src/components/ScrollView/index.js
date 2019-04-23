import React from "react";
import {StyleSheet, ScrollView, View} from "react-native";

const styles = StyleSheet.create({
    scrollView: {
        height: "100%",
        backgroundColor: "#f6f8f9",
    },
    container: {
        height: "100%",
        marginBottom: 10
    },
});

export default class extends React.Component {
    render() {
        const style = StyleSheet.flatten([styles.container, this.props.style]);
        return (
            <ScrollView style={styles.scrollView} onScroll={this.props.onScroll}>
                <View style={style}>
                    {this.props.children}
                </View>
            </ScrollView>
        )
    }
}