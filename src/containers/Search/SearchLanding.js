import React from "react";
import {StyleSheet, Text, View} from "react-native";
import BaseLandingContainer from "../BaseLanding";
import SearchBar from "../../components/SearchBar";


export default class SearchLandingContainer extends React.Component {
    render() {
        return (
            <BaseLandingContainer>
                <SearchBar onPress={this.props.onSubmit}/>
            </BaseLandingContainer>
        );
    }
}