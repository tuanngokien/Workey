import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import TopNavigator from "../../components/TopNavigator/TopNavigator"
import Notification from "../Notification/data"
import {Avatar} from "react-native-elements"

let styles = StyleSheet.create({
    containerList: {
        backgroundColor: "white",
        paddingTop: 5,
    },
    titleContainer: {
        fontFamily: "Nunito-Bold",
        fontSize: 20,
        color: "#000000",
        paddingVertical: "1%",
        paddingLeft: "2%",
        left: 0

    }
})

class NotificationScreen extends React.Component {
    state = {
        notification: Notification
    }

    handleMessage(message) {
        if (message.length > 30) {
            let tmp = message.slice(0, 30) + "...";
            return (
                <Text>{tmp}</Text>
            )
        } else {
            return (
                <Text>{message}</Text>
            )
        }
    }

    renderNoti = ({item}) => {
        return (
            <TouchableOpacity style={{backgroundColor: "white", marginVertical: 10, heigh: 80}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{width: "15%"}}>
                        <Avatar
                            rounded
                            source={{
                                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                            }}
                            size={50}
                            containerStyle={{
                                borderRadius: 100,
                                borderWidth: 1.5,
                                borderColor: "white"
                            }}
                        />
                    </View>
                    <View style={{width: "65%"}}>
                        <Text style={{fontSize: 17, color: "black"}}>
                            <Text style={{fontWeight: "bold"}}>{item.user.name}</Text>
                            {this.handleMessage(item.noti)}
                        </Text>
                    </View>
                    <View style={{width: "20%", right: 0, bottom: 0, position: "absolute"}}>
                        <Text>{item.user.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "transparent"}}>
                <View>
                    <TopNavigator
                        containerStyle={{
                            //backgroundColor: "transparent",
                            paddingTop: 20
                        }}
                        titleStyle={{
                            fontSize: 15,
                            fontFamily: ""
                        }}/>
                </View>

                <View>
                    <Text style={styles.titleContainer}>Notification</Text>
                </View>
                <View style={styles.containerList}>
                    <FlatList
                        data={this.state.notification}
                        renderItem={this.renderNoti}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </ScrollView>

        );
    }
}

export default NotificationScreen;