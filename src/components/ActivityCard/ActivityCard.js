import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
    card: {
        width: 108,
        height: 98,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        shadowColor: "rgba(115, 100, 248, 0.1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 2,
    },
    headerContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontFamily: "Nunito-Bold",
        marginLeft: 5,
        fontSize: 20,
        color: "#000000"
    },
    subTitle: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 13,
        color: "#ababb5"
    },
    icon: {
        paddingVertical: 10,
        paddingHorizontal: 11.5,
        borderRadius: 100
    }
});


class ActivityCard extends React.Component {
    render() {
        let {style, title, subTitle, icon, iconStyle} = this.props;
        const finalCardStyle = StyleSheet.flatten([styles.card, style]);
        const finalIconStyle = StyleSheet.flatten([styles.icon, iconStyle]);
        return (
            <View style={finalCardStyle}>
                <View style={styles.headerContainer}>
                    <Icon name={icon} size={15}  style={finalIconStyle}/>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </View>
        )
    }
}

export default ActivityCard