import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
    Alert
} from 'react-native';
import TopNavigator from "../../components/TopNavigator/TopNavigator"
import {SearchBar} from "react-native-elements"
import Conversations from "../Inbox/data"
import {Avatar} from "react-native-elements"
import BaseLandingContainer from "../../containers/BaseLanding/index"
import ScrollView from "../../components/ScrollView";
import ChatConversations from "../../components/Chat/Chat"
import EIcon from "react-native-vector-icons/Entypo";


let styles = StyleSheet.create({
    containerSearchBar: {
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,
        paddingHorizontal: 5,
        marginTop: 10

    },
    containerNav: {
        borderBottomColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 0.5,
    },
    containerInputSearch: {
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 0,

    },
    containerList: {
        backgroundColor: "white",
        paddingTop: 5,
        paddingHorizontal: "5%",
        marginBottom: 70,
    },
    header: {
        marginBottom: 10
    },
    icon: {
        color: "#42b72a",
        fontSize: 45,
        position: 'absolute',
        top: -9,
        right: -8,

    },
});

class InboxScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            conversations: Conversations,
        };
    }

    // state={
    //     search: "",
    //     conversations: Conversations,
    // }


    updateSearch = search => {
        this.setState({search});
    }

    handleMessage(message) {
        if (message.length > 30) {
            let tmp = message.slice(0, 30) + "...";
            return tmp;
        } else {
            return message;
        }
    }

    tranferChat = (item) => () => {
        this.props.navigation.navigate('Chat', {item});
        // Alert.alert("a");

    }
    renderUser = ({item}) => {
        const isOnline = true;
        return (
            <TouchableOpacity onPress={this.tranferChat(item.user)}
                              style={{backgroundColor: "white", marginVertical: 10}}>
                <View style={{flexDirection: "row",}}>
                    <View style={{width: "20%"}}>
                        <Avatar
                            rounded
                            source={item.user.avatar}
                            size={60}
                        />
                        <EIcon
                            name="dot-single"
                            style={[styles.icon, isOnline === false ? {color: "#b7b7b7"} : {}]}
                        />
                    </View>
                    <View style={{width: "80%"}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{fontFamily: "Nunito-Bold", fontSize: 15, color: "black"}}>{item.user.name}</Text>
                            <Text style={{fontFamily: "Nunito-Regular", fontSize: 12, color: "#757575"}}>{item.user.time}</Text>
                        </View>
                        {/* <Text>{item.messages[item.messages.length -1].text}</Text> */}
                        <Text style={{fontFamily: "Nunito-Regular", fontSize: 14, color: "#757575"}}>{item.messages[item.messages.length - 1].text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <View>
                <BaseLandingContainer title={"Messages"} style={{height: "auto", borderRadius: 0}} rounded={false}/>
                <ScrollView style={styles.containerList}>
                    <FlatList
                        data={this.state.conversations}
                        renderItem={this.renderUser}
                        keyExtractor={(item, index) => item.user.id.toString()}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default InboxScreen;
