import React from "react";
import {View, Text, StyleSheet} from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import {styles as titleStyles} from "../../containers/TopEmployers";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        ...titleStyles.titleContainer,
        fontSize: 14,
        paddingTop: "1%",
        paddingHorizontal: 5,
        paddingBottom: "0.5%"
    },
    subtitle: {
        ...titleStyles.subtitleContainer,
        fontSize: 12,
        paddingTop: "0.5%",
        paddingHorizontal: 2,
        paddingBottom: "0.5%"
    },
});

const ProfileRating = ({rating, viewCount}) => {
    let stars = [];
    let rounded_rating = Math.floor(rating);
    if (rounded_rating > 4) {
        rounded_rating = 5;
    } else {
        for (let i = 0; i < 5 - rounded_rating; i++) {
            stars.push(<AIcon name={"star"} key={5-i} size={13} color={"rgba(0,0,0,.15)"}/>)
        }
    }
    for (let i = 0; i < rounded_rating; i++) {
        stars.push(<AIcon name={"star"} key={i} size={13} color={"#FFB72B"}/>)
    }
    return (
        <View style={{alignItems: "flex-end"}}>
            <View style={styles.container}>
                <Text style={styles.title}>{rating}</Text>
                {stars}
            </View>
            <Text style={styles.subtitle}>({viewCount} Views)</Text>
        </View>
    )
};

export default ProfileRating;