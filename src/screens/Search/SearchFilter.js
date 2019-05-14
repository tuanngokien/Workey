import React from "react";
import {SearchFilterContainer, SearchLandingContainer} from "../../containers/Search";
import ScrollView from "../../components/ScrollView";
import {SEARCH_RESULT_SCREEN} from "./Tabs";
import firebase from "react-native-firebase";



class SearchFilterScreen extends React.Component {
    onSubmit = () => {
        this.props.navigation.navigate(SEARCH_RESULT_SCREEN)
    };

    render() {
        return (
            <ScrollView>
                <SearchLandingContainer onSubmit={this.onSubmit}/>
                <SearchFilterContainer onSubmit={this.onSubmit}/>
            </ScrollView>
        );
    }
}

export default SearchFilterScreen;