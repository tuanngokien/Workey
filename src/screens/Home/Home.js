import React from "react";
import ScrollView from "../../components/ScrollView";
import {Divider} from "../../components/Divider";
import HomeLandingContainer from "../../containers/HomeLanding";
import TopEmployersContainer from "../../containers/TopEmployers";
import NewsContainer from "../../containers/News";
import {NEWS_DETAIL_SCREEN} from "./Tabs";

class HomeScreen extends React.Component {
    onPressNews = (id) => {
        this.props.navigation.navigate(NEWS_DETAIL_SCREEN, {id});
    };

    render() {
        return (
            <ScrollView>
                <HomeLandingContainer/>
                <Divider/>
                <TopEmployersContainer/>
                <NewsContainer onPressNews={this.onPressNews}/>
            </ScrollView>
        )
    }
}

export default HomeScreen;