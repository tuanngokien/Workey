import React from "react";
import {View, StyleSheet, Text} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 8,
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 14,
        color: "#008ad8",
    },
    subTitle: {
        fontFamily: "Nunito-Regular",
        fontSize: 13,
        color: "#757575",
    },
});

const AccomplishmentCard = ({title, subTitles}) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title, {fontSize: 30, paddingHorizontal: 10}]}>{subTitles.length}</Text>
            <View>
                <Text style={styles.title}>{title}</Text>
                <View>
                    {subTitles.map((subTitle, index) => (<Text key={index} style={styles.subTitle}>{subTitle}</Text>))}
                </View>
            </View>
        </View>
    )
};

export default class AccomplishmentContainer extends React.Component {
    render() {
        return (
            <View>
                <AccomplishmentCard title={"Honors & Awards"}
                                    subTitles={["Third Prize at Vietnam Hackathon 2018", "Science Research Conference at University"]}/>
                <AccomplishmentCard title={"Languages"} subTitles={["English"]}/>
                <AccomplishmentCard title={"Publications"} subTitles={["Trending Social Network Analysis"]}/>
            </View>
        )
    }
}