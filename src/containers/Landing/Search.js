import React from "react";
import {StyleSheet, Text, View} from "react-native";
import BaseLandingContainer from "./Base";
import SearchBar from "../../components/SearchBar";

const styles = StyleSheet.create({
    activityContainer: {
        flexDirection: "row",
        paddingHorizontal: "5%",
        width: "100%",
        justifyContent: 'space-between',
        position: "absolute",
        bottom: -50,
    },
    greeting: {
        color: "#ffffff",
        fontSize: 22,
        fontFamily: "Nunito-Bold",
        padding: "5%",
    },
});

export default class HomeLandingContainer extends React.Component {
    render() {
        return (
            <BaseLandingContainer>
                <SearchBar/>
            </BaseLandingContainer>
        );
    }
}