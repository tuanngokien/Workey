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
import { SearchBar } from "react-native-elements"
import Conversations from "../Inbox/data"
import { Avatar } from "react-native-elements"
import BaseLandingContainer from "../../containers/BaseLanding"
// import { FlatList } from "react-native-gesture-handler";
import firebase from "react-native-firebase"

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
    }



})
class InboxScreen extends React.Component {
    state = {
        search: "",
        conversations: Conversations,
    }
    componentDidMount(){
        firebase.firestore().collection('users').doc("yl9d4fqcHSAXwi0xBaZ").set({"ssd":"sasssssa"})
                .then((data) => {
                    console.log("done")
                }).catch((error) => {
                    console.log("error");
            });
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
    renderUser = ({ item }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: "white", marginVertical: 0, height: 80 }}>
                <View style={{ flexDirection: "row", }}>
                    <View style={{ width: "15%" }}>
                        <Avatar
                            rounded

                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
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
            <BaseLandingContainer>
                
                  
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
