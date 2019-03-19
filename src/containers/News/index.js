import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {styles as titleStyles} from "../TopEmployers";
import NewsCard from "../../components/NewsCard";
import {Data} from "./data";

const styles = StyleSheet.create({
    containerTitle: titleStyles.containerTitle,
    newsContainer: {
        shadowColor: "rgba(115, 100, 248, 0.1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 2,
        backgroundColor: "#ffffff",
        marginHorizontal: "5%",
        borderRadius: 10,
        padding: 15,
        paddingBottom: 25,
    },
});

export default class NewsContainer extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.containerTitle}>News</Text>
                <View style={styles.newsContainer}>
                    {Data.map((item, index) => (
                        <View key={index}>
                            <NewsCard key={index} ordinalNumber={index + 1} {...item}/>
                            <View key={index} style={(index != Data.length - 1) ? {
                                margin: "5%",
                                borderWidth: 0.5,
                                borderColor: "rgb(218, 220, 224)"
                            } : {}}></View>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}