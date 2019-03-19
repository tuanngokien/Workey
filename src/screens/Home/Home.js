import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import LandingContainer from "../../containers/Landing";
import TopEmployersContainer from "../../containers/TopEmployers";
import NewsContainer from "../../containers/News";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f8f9",
        height: "100%",
        marginBottom: 10
    },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <LandingContainer/>
                    <View style={{marginTop: 55}}></View>
                    <TopEmployersContainer/>
                    <NewsContainer/>
                </View>
            </ScrollView>
        )
    }
}

export default HomeScreen;