import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ScrollView from "../../components/ScrollView";
import {CategoryBadge} from "../../components/NewsCard";
import YouTube from 'react-native-youtube'
import {YOUTUBE_API_KEY} from "../../constants";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        marginBottom: 200,
        padding: 10,
    },
    text: {
        fontFamily: "Nunito-Regular",
        fontSize: 14,
        color: "#000",
        textAlign: "justify",
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 15,
        marginVertical: 10,
    }
});


export default class NewsBodyContainer extends React.Component {
    render() {
        const {category, content} = this.props;
        return (
            <ScrollView style={styles.container} scrollViewStyle={styles.scrollView}>
                <View style={{marginBottom: 5}}>
                    <CategoryBadge category={category}/>
                </View>
                {content.map((content, index) => {
                    if(content.text){
                        return (<Text style={styles.text} key={index}>{content.text}</Text>)
                    }else if(content.title){
                        return (<Text style={[styles.text, styles.title]} key={index}>{content.title}</Text>)
                    }else{
                        return (
                            <YouTube
                                videoId={content.video}
                                loop={true}
                                apiKey={YOUTUBE_API_KEY}
                                onError={e => console.log(e)}
                                style={{height: 200, marginVertical: 10}}
                                autoplay={false}
                                lightboxMode={true}
                                key={index}
                            />
                        )
                    }
                })}
            </ScrollView>
        )
    }
}
