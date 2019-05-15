import React from "react";
import {View, StyleSheet, Image, Text, Alert, ScrollView} from "react-native";
import Conversations from "../../screens/Inbox/data"
import TopNavigator, {SimpleTopNavigator} from "../TopNavigator";
import {GiftedChat, Send} from "react-native-gifted-chat";
import HeaderChat from "../Chat/HeaderChat"
import firebase from "react-native-firebase";

let styles = StyleSheet.create({

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

});

const firestore = firebase.firestore();


class ChatConversations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentWillMount() {
        let user = this.props.navigation.getParam('item');
        // this.setState({
        //     messages: [
        //         {
        //             text: "1",
        //             user: {
        //                 _id: 1,
        //                 name: user.name,
        //                 avatar: user.avatar
        //             },
        //             _id: 1,
        //             createdAt: new Date(),
        //         },
        //     ]
        // });
    }

    componentDidMount() {
        const {uid} = this.props.user;
        this.listenMessages(uid);
    }

    listenMessages(uid) {
        firestore.collection("chat").onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                this.parseMessage(uid, doc);
            });
        });
    }

    parseMessage = (uid, doc) => {
        const {text, peerIds, createdAt} = doc.data();
        const chatId = doc.id;
        let _id = 0;
        let receiveUserId = peerIds[0];
        if (peerIds.findIndex(peerId => peerId === uid) === 0) {
            receiveUserId = peerIds[1];
        } else {
            _id = 1
        }
        firestore.collection("user").doc(receiveUserId).get().then(receiveUserData => {
            const {displayName, photoURL} = receiveUserData.data();
            console.log(displayName, photoURL, createdAt);
            let {messages} = this.state;
            if (messages.findIndex(m => chatId === m._id) === -1) {
                this.setState({
                    messages: [...messages, {
                        _id: chatId,
                        user: {avatar: photoURL, name: displayName, _id},
                        createdAt: new Date(),
                        realCreatedAt: createdAt,
                        text
                    }]
                });
            }
        })

    };

    onSend(messages) {
        // this.setState(previousState => ({
        //     messages: GiftedChat.append(previousState.messages, messages)
        // }));
        const {uid} = this.props.user;
        const receveiverId = "RhC7NLDFA0fJwPXg93scVAUUl3s2";
        firestore.collection("chat").doc().set({
            peerIds: [uid, receveiverId],
            text: messages[0].text,
            createdAt: (new Date()).getTime().toString(),
        });
    }

    handle(text, id, user_id, name, avatar, createdAt) {
        return {
            text: text,
            _id: id,
            createdAt: createdAt,
            user: user(user_id, name, avatar)
        }
    }

    user(id, name, avatar) {
        return {
            _id: id,
            name: name,
            avatar: avatar
        }
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{marginRight: 10, marginBottom: 5, height: 20, width: 20}}>
                    <Image source={require("../../assets/images/icons/goback.png")} resizeMode={'center'}/>
                </View>
            </Send>
        );
    }


    render() {
        let navigation = this.props.navigation;
        let name = navigation.getParam('item').name;
        let {messages} = this.state;
        messages.sort((a, b) => b.realCreatedAt - a.realCreatedAt);
        return (
            <View style={{height: "100%", width: "100%"}}>
                {/*<HeaderChat navigation={navigation} name={name}/>*/}
                <SimpleTopNavigator title={name} rightIconName="md-list" onBack={() => navigation.goBack()}/>
                <View style={{flex: 1}}>
                    <GiftedChat
                        messages={messages}
                        scrollToBottom={true}
                        onSend={messages => this.onSend(messages)}
                        user={{
                            _id: 0
                        }}
                    />
                </View>
            </View>
        )
    }
}

export default ChatConversations;
