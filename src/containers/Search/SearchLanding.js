import React from "react";
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