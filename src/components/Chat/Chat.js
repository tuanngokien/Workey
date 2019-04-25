import React from "react";
import { View, StyleSheet, Image, Text, Alert, ScrollView } from "react-native";
import Conversations from "../../screens/Inbox/data"
import TopNavigator from "../TopNavigator";
import { GiftedChat,Send } from "react-native-gifted-chat";
import HeaderChat from "../Chat/HeaderChat"
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

})
class ChatConversations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    let user = this.props.navigation.getParam('item');
    this.setState({
      messages: [

        {
          text: "1",
          user: {
            _id: 2,
            name: user.name,
            avatar: user.avatar
          },
          _id: 1,
          createdAt: new Date(),
        },
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)

    }));
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
          <View style={{marginRight: 10, marginBottom: 5,height:20,width:20}}>
              <Image source={require("../../assets/images/icons/goback.png")} resizeMode={'center'}/>
          </View>
      </Send>
  );
}


  render() {
    let navigation = this.props.navigation;
    let name = navigation.getParam('item').name;
    return (
      <View style={{height:"100%", width:"100%"}}>
        <HeaderChat navigation={navigation} name={name}/>
      
      <GiftedChat
        messages={this.state.messages}
        scrollToBottom={true}
        onSend={messages => this.onSend(messages)}
        
        user={{
          _id: 1
        }}
      />    
      </View>   
    )
  }
}
export default ChatConversations;
