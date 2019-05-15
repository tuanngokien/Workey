import React from "react";
import {View, Text, Share} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import {NewsTitleContainer, NewsBodyContainer} from "../../containers/NewsDetail";
import {onShare} from "../../actions/share";
import {Data} from "../../containers/News/data";

export default class NewsDetailScreen extends React.Component {
    onShare = () => {
        const id = this.props.navigation.getParam("id");
        onShare(`http://uetworkey.tk/news/${id}`)
    };

    onBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        const id = this.props.navigation.getParam("id");
        const {title, createdAt, viewCount, content, category, image} = Data.find((e) => e.id === id);
        return (
            <View>
                <SimpleTopNavigator title={""} rightIconName="md-share" onBack={this.onBack} coverSource={image}
                                    coverStyle={{height: 200}} overlayOpacity={0.3} onRightPress={this.onShare}>
                    <NewsTitleContainer title={title} createdAt={createdAt} viewCount={viewCount}/>
                </SimpleTopNavigator>
                <NewsBodyContainer category={category} content={content}/>
            </View>
        )
    }
}