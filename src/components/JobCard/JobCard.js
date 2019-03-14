import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import GoogleLogo from "../../assets/images/logo/google.png";
import Icon from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
    card: {
        width: 270,
        height: 70,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        shadowColor: "rgba(115, 100, 248, 0.1)",
        borderRadius: 12,
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 2,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontFamily: "Nunito-Bold",
        color: "#000000",
        fontSize: 17
    },
    subTitle: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 13
    }
});

class JobCard extends React.Component {
    render() {
        const {name, logo, location, quantity} = this.props;
        return (
            <View style={styles.card}>
                <View style={{flex: 0.4, justifyContent: "center", alignItems: "center"}}>
                    <Image source={logo} style={{width: 40, height: 40, resizeMode: "contain"}}/>
                </View>
                <View style={{flex: 1, justifyContent: "center", paddingRight: 15, paddingVertical: 9}}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {name}
                        </Text>
                        <Icon name={"heart"} color={"#000000"} style={{fontSize: 21}}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.subTitle}>
                            <Icon name={"map-pin"}/> {location}
                        </Text>
                        <Text style={styles.subTitle}>
                            {quantity} jobs
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default JobCard;
