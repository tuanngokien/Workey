import React from "react";
import {View} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import SearchResultsContainer from "../../containers/SearchResults";
import {JOB_DETAIL_SCREEN} from "./constants";


class SearchResultScreen extends React.Component {
    onBack = () => {
        this.props.navigation.goBack()
    };

    onItemPress = () => {
        this.props.navigation.navigate(JOB_DETAIL_SCREEN)
    };

    render() {
        return (
            <View>
                <SimpleTopNavigator title={"Job Results"} rightIconName="md-menu" onBack={this.onBack}/>
                <SearchResultsContainer onItemPress={this.onItemPress}/>
            </View>
        )
    }
}

export default SearchResultScreen;