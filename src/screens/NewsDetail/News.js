import React from "react";
import {View, Text, Share} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import News1Banner from "../../assets/images/news/news1_lg.jpg";
import {NewsTitleContainer, NewsBodyContainer} from "../../containers/NewsDetail";
import {onShare} from "../../actions/share";

export default class NewsDetailScreen extends React.Component {
    onShare = () => {
        onShare("uetworkey.tk/news/928")
    };

    onBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View>
                <SimpleTopNavigator title={""} rightIconName="md-share" onBack={this.onBack} coverSource={News1Banner}
                                    coverStyle={{height: 200}} overlayOpacity={0.3} onRightPress={this.onShare} onBack={this.onBack}>
                    <NewsTitleContainer/>
                </SimpleTopNavigator>
                <NewsBodyContainer/>
            </View>
        )
    }
}