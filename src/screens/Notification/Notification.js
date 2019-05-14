import React from "react";
import {View} from "react-native";
import BaseLandingContainer from "../../containers/BaseLanding";
import NotificationContainer from "../../containers/Notification";

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View>
                <BaseLandingContainer title={"Notification"} style={{height: "auto", borderRadius: 0}} rounded={false}/>
                <NotificationContainer/>
            </View>
        )
    }
}