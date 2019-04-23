import React from "react";
import {View, StyleSheet, Image, Text, TouchableWithoutFeedback} from "react-native";

let styles = StyleSheet.create({
    card: {
        width: 55,
        marginHorizontal: 17,
        marginVertical: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 20,
        height: 30,
        resizeMode: "contain",
    },
    titleContainer: {
        fontFamily: "Nunito-SemiBold",
        color: "#0f0250",
        fontSize: 11,
    },
});


class TinyCategoryCard extends React.Component {
    render() {
        let {src, shadeColor, title, activeColor, active, index, onPress} = this.props;
        const containerStyle = StyleSheet.flatten([
            styles.imageContainer,
            {backgroundColor: shadeColor},
            active ? {borderColor: activeColor, borderWidth: 2} : null]);
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.card}>
                    <View style={containerStyle}>
                        <Image
                            source={src}
                            style={[styles.image]}
                        />
                    </View>
                    <Text style={styles.titleContainer}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TinyCategoryCard;