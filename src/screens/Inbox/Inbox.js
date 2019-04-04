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
// import { FlatList } from "react-native-gesture-handler";

let styles = StyleSheet.create({
    containerSearchBar: {
        backgroundColor: "white",
        margin : 0,
        padding :0,
        paddingHorizontal: 5,

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
    // static navigationOptions = {
    //     header: null,
    // };
    updateSearch = search => {
        this.setState({ search });
    }
    renderUser = ({item})=> {
        return (
            <TouchableOpacity style={{backgroundColor:"red"}}>
                <View style ={{flexDirection:"row",}}>
                        <View style={{width:"15%"}}> 
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
                        <View style ={{width:"65%"}}>
                            <Text style={{fontWeight:"400",fontSize:16,color :"black"}}>item[0].user.name</Text>
                            <Text>{item[0].messages[item[0].messages.length -1].text}</Text>
                        </View>
                        <View style={{width:"20%",right : 0,position:"absolute"}}>
                            <Text>{item[0].user.time}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
    renderUser1(){
        return (
            <TouchableOpacity style={{backgroundColor:"white"}}>
                <View style ={{flexDirection:"row",}}>
                        <View style={{width:"15%"}}> 
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
                        <View style ={{width:"65%"}}>
                            <Text style={{fontWeight:"400",fontSize:16,color :"black"}}>{this.state.conversations[0].user.name}</Text>
                            <Text>{this.state.conversations[0].messages[this.state.conversations[0].messages.length -1].text}</Text>
                        </View>
                        <View style={{width:"20%",right : 0,position:"absolute"}}>
                            <Text>{this.state.conversations[0].user.time}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
    render() {

        return (
            <View>
                <View style={styles.containerNav}>
                    <TopNavigator
                        containerStyle={{
                            backgroundColor: "white",
                            paddingTop: 20,
                        }}
                        tilte={"Chat"}
                        titleStyle={{
                            fontSize: 15,
                            fontFamily: ""
                        }} />
                </View>
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
                            backgroundColor: "#DDE1E4",
                            borderRadius: 20,
                            marginRight:10,
                        }}
                    />
                </View>
                <View style={styles.containerList}>
                
                </View>
            </View>
        );
    }
}

export default InboxScreen;
