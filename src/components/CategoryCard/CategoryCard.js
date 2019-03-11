import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";

let styles = StyleSheet.create({
    card: {
        shadowColor: "rgba(115, 100, 248, 0.1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 0.25,
        borderRadius: 10,
        width: 160,
        height: 170,
        padding: 10,
        margin: 12,
        backgroundColor: "#ffffff",
        justifyContent: "space-between"
    },
    image: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        borderRadius: 3,
        position: "absolute",
        top: 12,
        left: 10,
    },
    shade: {
        borderRadius: 10,
    },
    iconShade: {
        width: 35,
        height: 35,
    },
    title: {
        fontFamily: "Montserrat-Bold",
        color: "#0f0250",
        fontSize: 17,
        marginBottom: 3,
    },
    subTitle: {
        color: "#bcbcc8",
        fontFamily: "Montserrat-SemiBold",
        fontSize: 10,
    }
});


class CategoryCard extends React.Component {
    render() {
        let {src, shadeColor, title, subTitle} = this.props;
        const shadeStyle = StyleSheet.flatten([styles.shade, {backgroundColor: shadeColor}]);
        return (
            <View style={styles.card}>
                <View>
                    <View style={[shadeStyle, styles.iconShade]}></View>
                    <Image
                        source={src}
                        style={styles.image}
                    />
                </View>
                <View style={[shadeStyle, {paddingHorizontal: 15, paddingVertical: 7}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {subTitle}
                    </Text>
                </View>
            </View>
        )
    }
}

export default CategoryCard;