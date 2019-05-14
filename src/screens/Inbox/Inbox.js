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
import firebase from "react-native-firebase"
import {chatRef} from "../../../firestore"
// import { FlatList } from "react-native-gesture-handler";

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
    },
    screen: {
        paddingBottom: 40
    },
    flexRow: {
        flexDirection: "row",
    },
    header: {
        marginBottom: 10
    }



})
class InboxScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            conversations: null,
            user :null,
            
        };
    }
    componentDidMount(){
        // firebase.firestore().collection('users').doc("yl9d4fqcHSAXwi0xBaZ").set({"ssd":"sasssssa"})
        //         .then((data) => {
        //             console.log("done")
        //         }).catch((error) => {
        //             console.log("error");
        //     });
    }
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
    tranferChat = (item) => () => {
        this.props.navigation.navigate('Chat', { item });
        // Alert.alert("a");

    }
    renderUser = ({ item }) => {
        if (this.state.search == "") {
            return (
                <TouchableOpacity onPress={this.tranferChat(item)} style={{ backgroundColor: "white", marginVertical: 0, height: 80 }}>
                    <View style={{ flexDirection: "row", }}>
                        <View style={{ width: "15%" }}>
                            <Avatar
                                rounded

                                source={{
                                    uri: item.avatar,
                                }}
                                size={50}
                                containerStyle={{
                                    borderRadius: 100,
                                    borderWidth: 1.5,
                                    borderColor: "white"
                                }}
                            />
                        </View>
                        <View style={{ width: "65%" }}>
                            <Text style={{ fontWeight: "400", fontSize: 16, color: "black" }}>{item.name}</Text>
                            {/* <Text>{item.messages[item.messages.length -1].text}</Text> */}
                            {this.handleMessage(item.messages[0].text)}
                        </View>
                        <View style={{ width: "20%", right: 0, position: "absolute" }}>
                            <Text>{item.messages[0].createAt}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    };
    getListChat(user_id) {
        let docUser = "user_" + user_id;
        chatRef.doc(docUser).get().then((res) => {
            this.setState({ conversations: res._data })
        })

    };
    componentDidMount() {
        
        // let cuser = await firebase.auth().currentUser;
        // firebase.firestore().collection("user").doc(cuser.uid).set(cuser).then(()=>{console.log("done")});
    };

    render() {
        if (this.state.conversations == null) {
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
                        {/* <FlatList
                            data={this.state.conversations.listchat}
                            renderItem={this.renderUser}
                            keyExtractor={(item, index) => item.user_id.toString()}

                        /> */}


                    </ScrollView>

                </ScrollView>

            );
        }
        else{
            return(
                <View></View>
            )
        }
    }
}

export default InboxScreen;
