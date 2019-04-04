import React from "react";
import {SearchLandingContainer} from "../../containers/Landing";
import SearchViewContainer from "../../containers/SearchView";
import ScrollView from "../../components/ScrollView";
import Divider from "../../components/Divider";
import {View} from "react-native";

class SearchScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <SearchLandingContainer/>
                <SearchViewContainer/>
            </ScrollView>
        );
    }
}

export default SearchScreen;