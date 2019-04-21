import React from "react";
import ScrollView from "../../components/ScrollView";
import {Divider} from "../../components/Divider";
import HomeLandingContainer from "../../containers/HomeLanding";
import TopEmployersContainer from "../../containers/TopEmployers";
import NewsContainer from "../../containers/News";


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView>
                <HomeLandingContainer/>
                <Divider/>
                <TopEmployersContainer/>
                <NewsContainer/>
            </ScrollView>
        )
    }
}

export default HomeScreen;