import React from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
    Alert
} from 'react-native';
import TopNavigator from "../../components/TopNavigator/TopNavigator"
import { SearchBar } from "react-native-elements"
import Conversations from "../Inbox/data"
import { Avatar } from "react-native-elements"
import BaseLandingContainer from "../../containers/BaseLanding/index"
import ChatConversations from "../../components/Chat/Chat"


let styles = StyleSheet.create({
    containerSearchBar: {
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,
        paddingHorizontal: 5,
        marginTop:10

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
    },
    screen: {
        paddingBottom: 40
    },
    flexRow: {
        flexDirection: "row",
    },
    header:{
        marginBottom: 10
    }



})
class InboxScreen extends React.Component {
    constructor(props){
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
        this.setState({ search });
    }
    handleMessage(message) {
        if (message.length > 30) {
            let tmp = message.slice(0, 30) + "...";
            return (
                <Text>{tmp}</Text>
            )
        }
        else {
            return (
                <Text>{message}</Text>
            )
        }
    }
    tranferChat=(item)=>()=>{
        this.props.navigation.navigate('Chat',{item});
        // Alert.alert("a");

    }
    renderUser = ({ item }) => {
        return (

            <TouchableOpacity onPress={this.tranferChat(item.user)} style={{ backgroundColor: "white", marginVertical: 0, height: 80 }}>
                <View style={{ flexDirection: "row", }}>
                    <View style={{ width: "15%" }}>
                        <Avatar
                            rounded

                            // source={{
                            //     uri: item.user.avatar
                            // }}
                            source={
                            item.user.avatar
                            }
                            // source= "../../assets/images/avatar/avatar2.jpeg"
                            size={50}
                            containerStyle={{
                                borderRadius: 100,
                                borderWidth: 1.5,
                                borderColor: "white"
                            }}
                        />
                    </View>
                    <View style={{ width: "65%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, color: "black" }}>{item.user.name}</Text>
                        {/* <Text>{item.messages[item.messages.length -1].text}</Text> */}
                        {this.handleMessage(item.messages[item.messages.length - 1].text)}
                    </View>
                    <View style={{ width: "20%", right: 0, position: "absolute" }}>
                        <Text>{item.user.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        
        return (
            <ScrollView style={styles.screen}>
            <BaseLandingContainer style={styles.header}>
                
                  
                    <View>
                        <SearchBar placeholder="Type here..."
                            onChangeText={this.updateSearch}
                            platform={"android"}
                            value={this.state.search}
                            round={true}
                            underlineColorAndroid={"#DDE1E4"}
                            // #DDE1E4
                            containerStyle={styles.containerSearchBar}
                            inputContainerStyle={{
                                backgroundColor: "white",
                                borderRadius: 20,
                                marginRight: 10,
                            }}
                        />
                    </View>
                    </BaseLandingContainer>
                    <ScrollView style={styles.containerList}>
                        <FlatList
                            data={this.state.conversations}
                            renderItem={this.renderUser}
                            keyExtractor={(item, index) => item.user.id.toString()}
                            
                        />


                    </ScrollView>
                    
                </ScrollView>
            
        );
    }
}

export default InboxScreen;
