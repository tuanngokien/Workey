import React from "react";
import NotificationCard from "../../components/NotificationCard";
import {View, Text, StyleSheet} from "react-native";
import ScrollView from "../../components/ScrollView";
import {TodayData, YesterdayData} from "./data";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "rgb(218, 220, 224)",
        paddingVertical: 10,
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 18,
        color: "#0f0250",
        marginBottom: 10,
    }
});

export default class NotificationContainer extends React.Component{
    render(){
        return (
            <ScrollView scrollViewStyle={styles.scrollView} style={{marginBottom: 70}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Today</Text>
                    {TodayData.map((data, index) => <NotificationCard {...data} key={index}/>)}
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Yesterday</Text>
                    {YesterdayData.map((data, index) => <NotificationCard {...data} key={index}/>)}
                </View>
            </ScrollView>
        )
    }
}