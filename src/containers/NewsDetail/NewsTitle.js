import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BookmarkButton from "../../components/BookmarkButton";

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        paddingBottom: 5,
        paddingHorizontal: "3%",
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 18,
        color: "#fff",
        paddingBottom: 7,
        paddingTop: 12,

    },
    subTitle: {
        fontFamily: "Nunito-Regular",
        fontSize: 13,
        color: "rgba(255,255,255,0.8)",
    },
    bookmarkButtonContainer: {
        position: "absolute",
        right: "3%",
        bottom: 5,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 6,
        elevation: 1.5,
    }
});

export default class NewsTitleContainer extends React.Component {
    render() {
        return (
            <LinearGradient colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)","rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]} style={styles.container}>
                <Text style={styles.title}>You Need to Start Hiring, You Also Need to Know What That Means</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>16 May 2019</Text>
                    <Icon name={"circle-small"} style={[styles.subTitle, {fontSize: 30}]}/>
                    <Text style={styles.subTitle}>162 views</Text>
                </View>
                <View style={styles.bookmarkButtonContainer}>
                    <BookmarkButton is_bookmarked={true}/>
                </View>
            </LinearGradient>
        )
    }
}