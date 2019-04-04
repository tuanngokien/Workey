import React from "react";
import {StyleSheet, Text, View} from "react-native";
import BaseLandingContainer from "./Base";
import ActivityCard from "../../components/ActivityCard";

const styles = StyleSheet.create({
    activityContainer: {
        flexDirection: "row",
        paddingHorizontal: "5%",
        width: "100%",
        justifyContent: 'space-between',
        position: "absolute",
        bottom: -50,
    },
    greeting: {
        color: "#ffffff",
        fontSize: 22,
        fontFamily: "Nunito-Bold",
        padding: "5%",
    },
});

export default class HomeLandingContainer extends React.Component {
    render() {
        return (
            <BaseLandingContainer>
                <View>
                    <Text style={styles.greeting}>
                        Hey, Tuan!
                    </Text>
                </View>
                <View style={styles.activityContainer}>
                    <ActivityCard title={"931"} subTitle={"New jobs"} icon={"plus-circle"}
                                  iconStyle={{color: "#1d10c9", backgroundColor: "rgba(197, 194, 239, 0.5)"}}/>
                    <ActivityCard title={"49"} subTitle={"Saved jobs"} icon={"bookmark"}
                                  iconStyle={{
                                      color: "#eb1d96",
                                      backgroundColor: "rgba(229, 179, 208, 0.5)",
                                      paddingHorizontal: 12.5
                                  }}/>
                    <ActivityCard title={"125"} subTitle={"Applied"} icon={"send"}
                                  iconStyle={{
                                      color: "#15a88a",
                                      backgroundColor: "rgba(149, 196, 186, 0.5)",
                                      paddingHorizontal: 10.5
                                  }}/>
                </View>
            </BaseLandingContainer>
        );
    }
}