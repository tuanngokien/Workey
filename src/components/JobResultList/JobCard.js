import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialIcons";
import BookmarkButton from "../BookmarkButton";


const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#ffffff",
        shadowColor: "rgba(115, 100, 248, 0.1)",
        borderRadius: 12,
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 1,
        marginBottom: 10,
    },
    cardHeader: {
        flexDirection: "row",
        height: 70,
    },
    cardBody: {
        borderTopColor: "rgb(218, 220, 224)",
        borderTopWidth: 1,
        marginHorizontal: "5%",
        paddingTop: "3%",
        paddingBottom: "1.5%",
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    title: {
        fontFamily: "Nunito-Bold",
        color: "#000000",
        fontSize: 16
    },
    subTitle: {
        fontFamily: "Nunito-Bold",
        fontSize: 13
    },
    bodyTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },
    bodyTitle: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 12.5,
        marginLeft: 10,
    },
    bodyDescription: {
        fontFamily: "Nunito-SemiBold",
        color: "#4c4c4c",
        fontSize: 13,
        textAlign: "justify",
    }
});

class JobCard extends React.Component {
    render() {
        const {id, is_bookmarked, title, employer, logo, description, salary, type, experience, onPress} = this.props;
        return (
            <TouchableOpacity onPress={() => onPress(id)}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={{flex: 0.3, justifyContent: "center", alignItems: "center"}}>
                            <Image source={logo} style={{width: 40, height: 40, resizeMode: "contain"}}/>
                        </View>
                        <View style={{flex: 1, justifyContent: "center", paddingRight: 15, paddingVertical: 9}}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {title}
                                </Text>
                                <View style={{position: "absolute", right: 5, top: 5}}>
                                    <BookmarkButton is_bookmarked={is_bookmarked}/>
                                </View>
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.subTitle}>
                                    {employer}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <View style={[styles.bodyTitleContainer, {marginBottom: 8}]}>
                            <Text style={styles.bodyDescription}>{description}</Text>
                        </View>
                        <View style={styles.bodyTitleContainer}>
                            <MIcon name={"attach-money"} size={20}/>
                            <Text style={styles.bodyTitle}>{salary}</Text>
                        </View>
                        <View style={styles.bodyTitleContainer}>
                            <Icon name={"clock"} size={20}/>
                            <Text style={styles.bodyTitle}>{type}</Text>
                        </View>
                        <View style={styles.bodyTitleContainer}>
                            <Icon name={"user"} size={20}/>
                            <Text style={styles.bodyTitle}>{experience}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default JobCard;
