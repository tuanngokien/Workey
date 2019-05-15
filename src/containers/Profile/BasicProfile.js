import React from "react";
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from "react-native";
import Avatar from "../../assets/images/avatar/avatar6.jpg";
import {styles as titleStyles} from "../TopEmployers";
import Icon from "react-native-vector-icons/Feather";
import FAIcon from "react-native-vector-icons/FontAwesome";
import ProfileRating from "../../components/ProfileRating";
import AnimatedProgressBar from "../../components/AnimatedProgressBar";
import SkillContainer from "./Skill";
import EducationContainer from "./Education";
import RoleContainer from "./Role";
import AccomplishmentContainer from "./Accomplishment";


const styles = StyleSheet.create({
    container: {
        top: -7,
        marginHorizontal: "5%",
    },
    extraMarginBottom: {
        marginBottom: 5
    },
    avatarContainer: {
        position: "absolute",
        top: -113,
    },
    avatar: {
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 5,
        borderRadius: 120,
        width: 120,
        height: 120,
    },
    title: {
        ...titleStyles.titleContainer,
        fontSize: 15,
        paddingTop: "1%",
        paddingHorizontal: 0,
        paddingBottom: "0.5%"
    },
    subtitle: {
        ...titleStyles.subtitleContainer,
        fontSize: 12,
        paddingTop: "0.5%",
        paddingHorizontal: 2,
        paddingBottom: "0.5%"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    editProfileButton: {
        shadowColor: "rgba(115, 100, 248, 0.1)",
        shadowOffset: {
            width: -3,
            height: 5,
        },
        shadowRadius: 6,
        elevation: 1.5,
        borderRadius: 50,
        padding: 13,
    },
    cellContainer:{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopColor: "rgba(218, 220, 224, .85)",
        borderBottomColor: "rgba(218, 220, 224, .85)",
        borderRightColor: "rgba(218, 220, 224, .85)",
        borderLeftColor: "transparent",
    }
});

export default class BasicProfileContainer extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.avatarContainer}>
                        <Image source={Avatar} style={styles.avatar}/>
                    </View>
                    <View>
                        <View style={[styles.rowContainer, {justifyContent: "space-between"}]}>
                            <View>
                                <View style={styles.rowContainer}>
                                    <Text style={[styles.title, {fontSize: 24}]}>Tuan Ngo Kien</Text>
                                    <FAIcon name={"circle"} style={{marginLeft: 5, marginTop: 5, color: "#42b72a"}}/>
                                </View>
                                <View style={styles.rowContainer}>
                                    <Icon name={"map-pin"} size={16}/>
                                    <Text style={[styles.subtitle, {fontSize: 14, paddingHorizontal: 3}]}>Hanoi</Text>
                                </View>
                            </View>
                            <ProfileRating rating={4.5} viewCount={182}/>
                        </View>
                        <View style={[styles.rowContainer, {marginVertical: 7}]}>
                            <View style={{flex: 0.33}}>
                                <Text style={styles.title}>82% PROFILE</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <AnimatedProgressBar progress={0.82} width={null} height={6} unfilledColor={"rgba(0,0,0,.15)"}
                                                     color={"rgba(0, 138, 216, .7)"} borderColor={"transparent"}/>
                            </View>
                            <View style={{flex: 0.17, flexDirection: "row", justifyContent: "flex-end"}}>
                                <TouchableWithoutFeedback onPress={this.props.onEdit}>
                                    <View style={styles.editProfileButton}>
                                        <Icon name={"edit-2"} size={20}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.rowContainer, {marginBottom: 17}]}>
                    <View style={[styles.cellContainer, {flex: 0.4}]}>
                        <Text style={[styles.subtitle, {fontSize: 14}]}>Experience: </Text>
                        <Text style={[styles.title, {fontSize: 14}]}>7 years</Text>
                    </View>
                    <View style={[styles.cellContainer, {flex: 0.25}]}>
                        <Text style={[styles.subtitle, {fontSize: 14}]}>Projects: </Text>
                        <Text style={[styles.title, {fontSize: 14}]}>23</Text>
                    </View>
                    <View style={[styles.cellContainer, {flex: 0.35}]}>
                        <Text style={[styles.subtitle, {fontSize: 14}]}>Status: </Text>
                        <Text style={[styles.title, {fontSize: 14}]}>Available</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.extraMarginBottom}>
                        <Text style={styles.title}>Skills & Endorsements</Text>
                        <SkillContainer/>
                    </View>
                    <View style={styles.extraMarginBottom}>
                        <Text style={styles.title}>Roles</Text>
                        <RoleContainer/>
                    </View>
                    <View style={styles.extraMarginBottom}>
                        <Text style={styles.title}>Education</Text>
                        <EducationContainer/>
                    </View>
                    <View style={styles.extraMarginBottom}>
                        <Text style={styles.title}>Accomplishments</Text>
                        <AccomplishmentContainer/>
                    </View>
                </View>
            </View>
        )
    }
}