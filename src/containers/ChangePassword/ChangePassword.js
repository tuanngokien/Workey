import React from "react";
import {StyleSheet} from "react-native";
import ScrollView from "../../components/ScrollView";
import Input from '../../components/Input';


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

export default class ChangePasswordContainer extends React.Component{
    render() {
        return (
            <ScrollView style={styles.container} scrollViewStyle={{backgroundColor: "#fff"}}>
                    <Input label="Current Password" value="" secureTextEntry={true}/>
                    <Input label="New Password" value="" secureTextEntry={true}/>
                    <Input label="New Password (Again)" value="" secureTextEntry={true}/>
            </ScrollView>
        )
    }
}