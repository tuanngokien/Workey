import React from "react";
import {StyleSheet, View} from "react-native";
import SettingCard, {SwitchSettingCard} from "../../components/SettingCard";
import ScrollView from '../../components/ScrollView';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
    },
});

export default class SettingsContainer extends React.Component {
    render() {
        return (
            <ScrollView scrollViewStyle={styles.scrollView}>
                <View>
                    <SettingCard iconName={"md-list"} title={"Edit profile"}/>
                    <SettingCard iconName={"ios-unlock"} title={"Change password"}/>
                    <SettingCard iconName={"ios-globe"} title={"Language"}/>
                    <SettingCard iconName={"md-log-out"} title={"Sign Out"} iconRightVisible={false}/>
                </View>
                <View style={{marginTop: 40,}}>
                    <SwitchSettingCard defaultValue={true} title={"Push notifications"}/>
                    <SwitchSettingCard defaultValue={false} title={"Receive newsletters"}/>
                    <SwitchSettingCard defaultValue={true} title={"Receive special offers"}/>
                    <SwitchSettingCard defaultValue={false} title={"Participate in Beta Program"}/>
                </View>

            </ScrollView>
        )
    }
}