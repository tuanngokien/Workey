import React from "react";
import {StyleSheet, Text, Image, View, TouchableWithoutFeedback} from "react-native";
import {SimpleTopNavigator} from "../../components/TopNavigator";
import {styles as titleStyles} from "../../containers/TopEmployers";
import Icon from "react-native-vector-icons/AntDesign";
import {ColoredDivider} from "../../components/Divider";
import CriterionList from "../../components/CriterionList";
import ScrollView from "../../components/ScrollView";
import Data from "./data";
import {DEVICE_HEIGHT} from "../../constants";


const CONTENT_OVERLAP_TOP = -40;

const styles = StyleSheet.create({
    cover: {
        height: 200
    },
    basicProfileContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        top: CONTENT_OVERLAP_TOP,
        marginBottom: DEVICE_HEIGHT* 0.07 + CONTENT_OVERLAP_TOP + 3,
        // marginHorizontal: "3%",
        // paddingBottom: "2%",
        // elevation: 4,
    },
    avatarContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        zIndex: 100,
        padding: 10,
        borderRadius: 100,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderWidth: 5,
        top: -30,
        right: "8%",
    },
    avatar: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    },
    basicProfileSubContainer: {
        flex: 1,
        marginTop: 10,
    },
    title: {
        ...titleStyles.titleContainer,
        fontSize: 20,
        paddingTop: "1%",
        paddingBottom: "0.5%"
    },
    subtitle: {
        ...titleStyles.subtitleContainer,
        fontSize: 14,
        paddingTop: "0.5%",
        paddingBottom: "0.5%"
    },
    jobReviewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        marginVertical: 15,
    },
    detailContainer: {
        marginHorizontal: "3%",
        top: -30,
    }
});


const TinyCard = ({iconName, number, title, style}) => {
    return (
        <View style={{paddingVertical: "2.3%", flex: 0.45, alignItems: "center", backgroundColor: style.backgroundColor, borderRadius: 10}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon name={iconName} style={{fontSize: 20, color: style.iconColor}}/>
                <Text style={[styles.subtitle, {paddingHorizontal: 4, color: style.textColor}]}>
                    <Text style={[styles.title, {fontSize: 14, color: style.textColor}]}>{number} </Text>
                    {title}
                </Text>
            </View>
        </View>
    )
};

export default class JobDetailContainer extends React.Component {
    render() {
        const {cover, logo, title, employer, createdAt, viewCount, rating, description, responsibilities, qualifications} = Data;
        return (
            <ScrollView style={{backgroundColor: "#ffffff"}}>
                <SimpleTopNavigator title={""} coverSource={cover} rightIconName={"md-share"}
                                    coverStyle={styles.cover} overlayOpacity={0.5} iconVisible={false}/>
                <View style={styles.basicProfileContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={logo} style={styles.avatar}/>
                    </View>
                    <View style={styles.basicProfileSubContainer}>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <ColoredDivider style={{marginBottom: "1%"}}/>
                            <Text style={styles.subtitle}>Company: {employer}</Text>
                            <Text style={styles.subtitle}>Posted on {createdAt}</Text>
                        </View>
                        <View style={styles.jobReviewContainer}>
                            <TinyCard iconName={"eyeo"} number={viewCount} title={"Views"} style={{backgroundColor: "#F0F6FF", textColor: "#435582", iconColor: "#3165EC"}}/>
                            <TinyCard iconName={"staro"} number={rating} title={"Avg. Rating"} style={{backgroundColor: "#FEFAF2", textColor: "#9C8860", iconColor: "#FED57D"}}/>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.title, {fontSize: 18}]}>Job Description</Text>
                        <Text style={[styles.subtitle, {color: "#4c4c4c", textAlign: "justify"}]}>{description}</Text>
                    </View>
                    <View>
                        <Text style={[styles.title, {fontSize: 18}]}>Your Responsibilities</Text>
                        <CriterionList data={responsibilities}/>
                    </View>
                    <View>
                        <Text style={[styles.title, {fontSize: 18}]}>Qualifications</Text>
                        <CriterionList data={qualifications}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}