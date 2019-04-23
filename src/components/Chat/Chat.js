import React from "react";
import { View, StyleSheet, Image, Text, Alert ,ScrollView} from "react-native";
import Conversations from "../../screens/Inbox/data"
import TopNavigator from "../TopNavigator";
let styles = StyleSheet.create({
    itemIn: {
        backgroundColor:"red",
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor:"blue",
    },
    balloon: {
        maxWidth: 250,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
    },
    time: {
        alignSelf: 'flex-end',
        margin: 15,
    },

})
class ChatConversations extends React.Component {
    state = {
        data: Conversations,
    }

    render() {

        return (
            <View>
                <TopNavigator></TopNavigator>
                <ScrollView>
                <View style={styles.itemIn}>
                <Text>as</Text>
                </View>
                <View style={styles.itemOut}>
                <Text>ss sdjacasj sfd saf sdf sa fsa f dsfsd fsdf sdf sdf sdf sfs</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}
export default ChatConversations;
