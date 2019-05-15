import React from "react";
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import GoogleLogo from "../../assets/images/logo/google.png";
import Icon from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
    card: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 18,
        elevation: 1,
    },
    ordinalNumber: {
        fontFamily: "Nunito-Bold",
        color: "#4285f4",
        fontSize: 14,
        paddingRight: 3,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        color: "#000000",
        paddingBottom: 5,
        fontSize: 14,
    },
    subTitle: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 10,
    },
    category: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 12,
        paddingLeft: 8,
        borderLeftWidth: 4,
    }
});

const CategoryBadge = ({category}) => {
    let borderColor = "#716aca", categoryTitle = "Recruiting";
    if (category === 1) {
        borderColor = "#ee8028";
        categoryTitle = "Employer";
    }
    return (
        <Text style={[styles.category, {borderColor}]}>
            {categoryTitle}
        </Text>
    )
};


class NewsCard extends React.Component {
    render() {
        const {ordinalNumber, title, createdAt, image, category, onPress} = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => onPress(ordinalNumber)}>
                <View style={styles.card}>
                    <Text style={styles.ordinalNumber}>{ordinalNumber}.</Text>
                    <View style={{flex: 0.75, flexDirection: "column", justifyContent: "space-between"}}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                {title}
                            </Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <CategoryBadge category={category}/>
                            <View style={[styles.titleContainer, {marginRight: 8}]}>
                                <Icon name={"clock"} style={{marginRight: 2}}/>
                                <Text style={styles.subTitle}>
                                    {createdAt}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 0.2, justifyContent: "flex-end", alignItems: "center"}}>
                        <Image
                            source={image}
                            style={{width: 70, height: 70, borderRadius: 10}}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default NewsCard;
