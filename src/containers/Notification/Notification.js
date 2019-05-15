import React from "react";
import NotificationCard from "../../components/NotificationCard";
import {View, Text, StyleSheet} from "react-native";
import ScrollView from "../../components/ScrollView";
import {TodayData, YesterdayData} from "./data";
import firebase from "react-native-firebase";
import {splitNotifications} from "../../utils";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "rgb(218, 220, 224)",
        paddingVertical: 10,
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 18,
        color: "#0f0250",
        marginBottom: 10,
    }
});

const firestore = firebase.firestore();


export default class NotificationContainer extends React.Component {
    componentDidMount() {
        const {uid} = this.props.user;
        this.listenNewNotifications(uid);
    }

    parseNotification = (snapshot) => {
        const {notifications, pushNewNotification} = this.props;
        const {from, createdAt, message} = snapshot.data();
        const id = snapshot.id;
        firestore.collection("user").doc(from).get().then(fromUserData => {
            const {displayName, photoURL} = fromUserData.data();
            if(notifications.findIndex(n => id === n.id) === -1){
                pushNewNotification({id, sender: {displayName, photoURL}, createdAt, message});
            }
        })
    };

    listenNewNotifications = async (uid) => {
        firestore.collection(`user/${uid}/notifications`).orderBy("createdAt", "desc").onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                this.parseNotification(doc);
            });
        })
    };

    render() {
        const {notifications} = this.props;
        notifications.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });
        const [todayNotifications, yesterdayNotifications] = splitNotifications(notifications);
        return (
            <ScrollView scrollViewStyle={styles.scrollView} style={{marginBottom: 70}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Today</Text>
                    {todayNotifications.map((notification) => <NotificationCard {...notification} key={notification.id}/>)}
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Yesterday</Text>
                    {yesterdayNotifications.map((notification) => <NotificationCard {...notification} key={notification.id}/>)}
                </View>
            </ScrollView>
        )
    }
}