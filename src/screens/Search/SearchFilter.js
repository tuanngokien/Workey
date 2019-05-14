import React from "react";
import {SearchFilterContainer, SearchLandingContainer} from "../../containers/Search";
import ScrollView from "../../components/ScrollView";
import {SEARCH_RESULT_SCREEN} from "./Tabs";



class SearchFilterScreen extends React.Component {
    onSubmit = () => {
        this.props.navigation.navigate(SEARCH_RESULT_SCREEN)
    };

    render() {
        return (
            <ScrollView>
                <SearchLandingContainer onSubmit={this.onSubmit}/>
                <SearchFilterContainer/>
            </ScrollView>
        );
    }
}

export default SearchFilterScreen;