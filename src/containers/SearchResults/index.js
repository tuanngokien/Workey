import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import ScrollView from "../../components/ScrollView";
import JobSuggestionsCarousel from "../../components/JobSuggestionsCarousel";
import JobResultList from "../../components/JobResultList";
import Icon from "react-native-vector-icons/Feather";
import {styles as titleStyles} from "../../containers/TopEmployers";
import Data from "./data";

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 60
    },
    resultTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});

class SearchResultsContainer extends React.Component {
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text style={[titleStyles.titleContainer, {
                        fontSize: 17,
                        paddingBottom: 0,
                        paddingTop: "2%"
                    }]}>Suggestions</Text>
                    <JobSuggestionsCarousel/>
                </View>
                <View>
                    <View style={styles.resultTitleContainer}>
                        <Text style={[titleStyles.titleContainer, {fontSize: 17, paddingBottom: "1%"}]}>Results</Text>
                        <Text style={[titleStyles.titleContainer, {fontSize: 14, paddingBottom: "1%"}]}><Icon
                            name={"map-pin"} size={14}/> Hanoi</Text>
                    </View>
                    <View style={styles.resultTitleContainer}>
                        <Text style={[titleStyles.subtitleContainer, {color: "#757575", fontSize: 12, paddingTop: 0}]}>All IT Developer jobs</Text>
                    </View>
                    <JobResultList onItemPress={this.props.onItemPress} data={Data.results}/>
                </View>
            </ScrollView>
        )
    }
}

export default SearchResultsContainer;