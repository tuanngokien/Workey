import React from "react";
import {View, StyleSheet, Text} from "react-native";
import ScrollView from "../../components/ScrollView";
import Input from '../../components/Input';
import RoleContainer from "../Profile/Role";
import SkillContainer from "../Profile/Skill";


const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
    },
    container: {
        marginBottom: 100,
    },
    title: {
        fontFamily: "Nunito-Bold",
        color: "#0f0250",
        fontSize: 22,
        paddingVertical: 8,
        paddingHorizontal: "5%",
    },
    firstNameContainer: {
        flex: 0.4,
        borderLeftWidth: 0,
    },
    lastNameContainer: {
        flex: 0.6,
    },
    yearContainer: {
        flex: 0.5,
    },
});

export default class EditProfileContainer extends React.Component{
    render() {
        return (
            <ScrollView style={styles.container} scrollViewStyle={{backgroundColor: "#fff"}}>
                <Text style={styles.title}>Basic Profile</Text>
                <View style={styles.rowContainer}>
                    <Input label="First Name" value="Tuan" inputContainerStyle={styles.firstNameContainer}/>
                    <Input label="Last Name" value="Ngo Kien" inputContainerStyle={styles.lastNameContainer}/>
                </View>
                <View>
                    <Input label="Email" value="tuanngokien@gmail.com"/>
                </View>
                <View>
                    <Input label="Phone Number" value="0964253686"/>
                </View>
                <View>
                    <Input label="Location" value="Hanoi, Vietnam"/>
                </View>
                <Text style={styles.title}>Education</Text>
                <View>
                    <Input label="School" value="UET, Vietnam National University, Hanoi"/>
                </View>
                <View>
                    <Input label="Major" value="Computer Science"/>
                </View>
                <View style={styles.rowContainer}>
                    <Input label="From Year" value="2016" inputContainerStyle={styles.yearContainer}/>
                    <Input label="To Year" value="2020" inputContainerStyle={[styles.yearContainer]}/>
                </View>
                <Text style={styles.title}>Experience</Text>
                <View>
                    <Input label="Skills and Endorsements" placeholder={"Add new skill"} iconName={"plus"}>
                        <View style={{marginVertical: 10}}>
                            <SkillContainer/>
                        </View>
                    </Input>
                </View>
                <View>
                    <Input label="Roles" placeholder={"Add new role"} iconName={"plus"}>
                        <View style={{marginVertical: 10}}>
                            <RoleContainer/>
                        </View>
                    </Input>
                </View>
            </ScrollView>
        )
    }
}