import React from "react";
import {SearchFilterContainer, SearchLandingContainer} from "../../containers/Search";
import ScrollView from "../../components/ScrollView";
import {SEARCH_RESULT_SCREEN} from "./Tabs";
import firebase from "react-native-firebase";



class SearchFilterScreen extends React.Component {
    onSubmit = () => {
        this.props.navigation.navigate(SEARCH_RESULT_SCREEN)
    };

    componentDidMount() {
        firebase.firestore().collection('users').doc("yl9d4fqcHSAXwi0xBaZ").set({"ssd": "sassa"})
            .then((data) => {
                console.log('data ' , data)
            }).catch((error) => {
            console.log(error);
        });
    }

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