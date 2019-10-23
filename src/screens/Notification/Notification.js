import React from "react";
import {View} from "react-native";
import BaseLandingContainer from "../../containers/BaseLanding";
import NotificationContainer from "../../containers/Notification";
import {JOB_DETAIL_SCREEN} from "../Search/Tabs";

export default class NotificationScreen extends React.Component {
    pressNotification = (id) => {
        this.props.navigation.navigate(JOB_DETAIL_SCREEN, {id})
    }
    render() {
        return (
            <View>
                <BaseLandingContainer title={"Notification"} style={{height: "auto", borderRadius: 0}} rounded={false}/>
                <NotificationContainer onCardPress={this.pressNotification}/>
            </View>
        )
    }
}
