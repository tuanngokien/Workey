import React from "react";
import {View, StyleSheet, Text, TouchableWithoutFeedback, Image} from "react-native";
import EIcon from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    icon: {
        color: "#42b72a",
        fontSize: 43,
        position: 'absolute',
        top: -7,
        right: -8,
    },
    subTitle: {
        fontFamily: "Nunito-Regular",
        fontSize: 14,
    },
    actor: {
        fontFamily: "Nunito-SemiBold",
        fontWeight:'normal',
        fontSize: 14.5,
        color: "#008ad8"
    },
    avatar: {
        marginTop: 3,
        height: 60,
        width: 60,
        borderRadius: 50,
    }
});

export default class NotificationCard extends React.Component {
    render() {
        const {avatar, actor, message, createdAt, isOnline} = this.props;
        return (
            <TouchableWithoutFeedback>
                <View style={[styles.rowContainer, {marginBottom: 10}]}>
                    <View style={{flex: 0.2}}>
                        <Image source={avatar} style={styles.avatar}/>
                        <EIcon
                            name="dot-single"
                            style={[styles.icon, isOnline === false ? {color: "#b7b7b7"} : {}]}
                        />
                    </View>
                    <View style={{flex: 0.8}}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.subTitle}><Text style={styles.actor}>{actor}</Text> {message}</Text>
                        </View>
                        <Text style={[styles.subTitle, {fontSize: 12.5, marginTop: 5}]}>{createdAt}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}